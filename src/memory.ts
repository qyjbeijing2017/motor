
/**
 * MotorVersion
 * @enum {number}
 * @property {number} V1 = 1
 * 
 */
export enum MotorVersion {
    V1 = 1,
}

/**
 * MotorMemoryOptions
 * @param allocatedMemory: (size: number) => Uint8Array = (size: number) => new Uint8Array(size) - the function to allocate memory
 * @param size: number = 4 * 1024 - the initial size of memory
 * 
 */
export interface MotorMemoryOptions {
    allocatedMemory: (size: number) => Uint8Array;
    size: number;
}

/**
 * MotorMemoryBlock is a block of memory with address and size
 * MotorMemoryBlock
 * @param address: number - the address of the block
 * @param size: number - the size of the block
 */
export interface MotorMemoryBlock {
    address: number;
    size: number;
}

/**
 * MotorMemory is the environment of the motor, it can be allocate, free and expand. all data is stored in the memory, including the flash, RAM, Storage, etc.
 * MotorMemory
 * @param options?: Partial<MotorMemoryOptions> - the options of the memory
 */
export class MotorMemory {
    /**
     * magic number of the memory file
     * @type {string} = `MOTR`
     */
    static readonly magic = `MOTR`;

    private _version: MotorVersion = MotorVersion.V1;

    /**
     * version of the memory file
     * @type {MotorVersion} = MotorVersion.V1
     */
    get version() {
        return this._version;
    }

    private _emptyBlocks: MotorMemoryBlock[] = [];
    private _allocatedMemory: (size: number) => Uint8Array = (size: number) => new Uint8Array(size);
    private _memory: Uint8Array;

    private _dataView: DataView;

    /**
     * data view of the motor
     * @type {DataView}
     * @readonly
     */
    get dataView() {
        return this._dataView;
    }

    /**
     * memory of the motor
     * @type {Uint8Array}
     * @readonly
     */
    get memory() {
        return this._memory;
    }

    constructor(options?: Partial<MotorMemoryOptions>) {
        if (options?.allocatedMemory) {
            this._allocatedMemory = options.allocatedMemory;
        }
        this._memory = this._allocatedMemory(options?.size ?? 4 * 1024);
        this._dataView = new DataView(this._memory.buffer);
        this._emptyBlocks.push({ address: 0, size: this._memory.length });
    }

    /**
     * clean the memory, all data will be lost
     * @returns {void}
     */
    clean() {
        this._emptyBlocks = [{ address: 0, size: this._memory.length }];
    }

    /**
     * expand the memory
     * @param size: number = this._memory.length * 2 - the size of the new memory. if the size is smaller than the current size, the memory will not be changed. if the size is smaller than the current size * 2, the memory will be expanded to the size * 2. if the size is larger than the current size * 2, the memory will be expanded to the new size, and the empty block will be changed to the new size
     * @returns {void}
     */
    expand(size: number = this._memory.length * 2) {
        size = Math.floor(size);
        if(size < this._memory.length) {
            return;
        }
        const newMemory = this._allocatedMemory(size);
        this._dataView = new DataView(newMemory.buffer);
        newMemory.set(this._memory);
        const lastSize = this._memory.length;
        this._memory = newMemory;
        this.free(lastSize, size - lastSize);
    }

    /**
     * empty size of the memory
     * @type {number}
     * @readonly
     * @returns {number}
     */
    get emptySize() {
        return this._emptyBlocks.reduce((acc, block) => acc + block.size, 0);
    }

    /**
     * used size of the memory
     * @type {number}
     * @readonly
     * @returns {number}
     */
    get usedSize() {
        return this._memory.length - this.emptySize;
    }

    /**
     * used blocks of the memory
     * @type {MotorMemoryBlock[]}
     * @readonly
     * @returns {MotorMemoryBlock[]}
     */
    get usedBlocks(): MotorMemoryBlock[] {
        const blocks: MotorMemoryBlock[] = [];
        this._emptyBlocks.sort((a, b) => a.address - b.address);
        let address = 0;
        for (const block of this._emptyBlocks) {
            if (block.address > address) {
                blocks.push({ address, size: block.address - address });
            }
            address = block.address + block.size;
        }
        if (address < this._memory.length) {
            blocks.push({ address, size: this._memory.length - address });
        }
        return blocks;
    }
    
    /**
     * save the memory to a buffer
     * 
     * magic: 4 bytes
     * version: 4 bytes
     * blocks:[
     *  address: 4 bytes
     *  size: 4 bytes
     *  data: size bytes
     * ]
     * 
     * @returns {Uint8Array}
     */
    save(): Uint8Array {
        const blocks = this.usedBlocks;
        const size = 8 + blocks.reduce((acc, block) => acc + block.size + 8, 0);
        const buffer = this._allocatedMemory(size);
        this._dataView = new DataView(buffer.buffer);
        const view = new DataView(buffer.buffer);
        let offset = 0;
        const magicNumber = new Uint8Array(4);
        for (let i = 0; i < MotorMemory.magic.length; i++) {
            magicNumber[i] = MotorMemory.magic.charCodeAt(i);
        }
        buffer.set(magicNumber, offset);
        offset += 4;
        view.setUint32(offset, this._version);
        offset += 4;
        for (const block of blocks) {
            view.setUint32(offset, block.address);
            offset += 4;
            view.setUint32(offset, block.size);
            offset += 4;
            buffer.set(this._memory.subarray(block.address, block.address + block.size), offset);
            offset += block.size;
        }
        return buffer;
    }

    /**
     * read the memory from a buffer
     * magic: 4 bytes
     * version: 4 bytes
     * blocks:[
     *  address: 4 bytes
     *  size: 4 bytes
     *  data: size bytes
     * ]
     * @returns {void}
     */
    read(buffer: Uint8Array) {
        const view = new DataView(buffer.buffer);
        let offset = 0;
        const magicNumber = new Uint8Array(4);
        magicNumber.set(buffer.subarray(offset, offset + 4));
        offset += 4;
        if (String.fromCharCode(...magicNumber) !== MotorMemory.magic) {
            throw new Error(`Invalid memory file`);
        }
        this._version = view.getUint32(offset);
        offset += 4;

        const blockUsed: MotorMemoryBlock[] = [];
        while (offset < buffer.length) {
            const address = view.getUint32(offset);
            offset += 4;
            const blockSize = view.getUint32(offset);
            offset += 4;
            blockUsed.push({ address, size: blockSize });
            offset += blockSize;
        }
        blockUsed.sort((a, b) => a.address - b.address);
        const lastBlock = blockUsed[blockUsed.length - 1];
        this.expand(lastBlock.address + lastBlock.size);
        this._emptyBlocks = [];

        offset = 8;
        let address = 0;
        for (const block of blockUsed) {
            if (block.address > address) {
                this._emptyBlocks.push({ address: offset, size: block.address - offset });
            }
            offset += 8;
            this._memory.set(buffer.subarray(offset, offset + block.size), block.address);
            offset += block.size;
            address = block.address + block.size;
        }
        if (address < this._memory.length) {
            this._emptyBlocks.push({ address: address, size: this._memory.length - address });
        }
    }

    /**
     * free the memory
     * @param address: number - the address of the block
     * @param size: number - the size of the block
     * @returns {void}
     */
    free(address: number, size: number) {
        address = Math.floor(address);
        size = Math.floor(size);
        this._emptyBlocks.sort((a, b) => a.address - b.address);
        const beforeIndex = this._emptyBlocks.findIndex((block) => block.address + block.size === address);
        const afterIndex = this._emptyBlocks.findIndex((block) => block.address === address + size);
        if(beforeIndex > -1 && afterIndex > -1) {
            this._emptyBlocks[beforeIndex].size += size + this._emptyBlocks[afterIndex].size;
            this._emptyBlocks.splice(afterIndex, 1);
        } else if(beforeIndex > -1) {
            this._emptyBlocks[beforeIndex].size += size;
        } else if(afterIndex > -1) {
            this._emptyBlocks[afterIndex].address = address;
            this._emptyBlocks[afterIndex].size += size;
        } else {
            this._emptyBlocks.push({ address, size });
        }
    }

    /**
     * allocate the memory, if the block is not enough, the memory will be tried to expand
     * @param size: number - the size of the block
     * @returns {number} - the address of the block
     */
    allocate(size: number): number {
        size = Math.floor(size);
        this._emptyBlocks.sort((a, b) => a.size - b.size);
        let block = this._emptyBlocks.find((block) => block.size >= size);
        if (!block) {
            this.expand(Math.max(this._memory.length * 2, this._memory.length + size));
            block = this._emptyBlocks.find((block) => block.size >= size)!;
        }
        const address = block.address;
        if(block.size > size) {
            block.address += size;
            block.size -= size;
        } else {
            this._emptyBlocks.splice(this._emptyBlocks.indexOf(block), 1);
        }
        return address;
    }

    /**
     * resize the memory, it will clean the whole memory
     * @param size: number - the size of the block
     * @returns {void}
     */
    resize(size: number) {
        size = Math.floor(size);
        this._memory = this._allocatedMemory(size);
        this._dataView = new DataView(this._memory.buffer);
        this._emptyBlocks = [{ address: 0, size }];
    }
}
