export interface MemoryBlock {
    address: number;
    size: number;
}

export interface MemoryProps {
    size?: number;
    createBuffer?: (size: number) => Uint8Array;
}

export class Memory {
    private _buffer: Uint8Array;
    private _viewer: DataView;
    private _createBuffer: (size: number) => Uint8Array;
    private _emptyBlocks: MemoryBlock[] = [];

    get size() {
        return this._buffer.length;
    }

    get buffer() {
        return this._buffer;
    }

    get viewer() {
        return this._viewer;
    }

    constructor(props?: MemoryProps) {
        this._createBuffer = props?.createBuffer || ((size: number) => new Uint8Array(size));
        this._buffer = this._createBuffer(props?.size || 1024 * 4); // Default size 4KB
        this._viewer = new DataView(this._buffer.buffer);
        this._emptyBlocks.push({
            address: 0,
            size: this._buffer.length,
        });
    }

    private mergeEmptyBlocks() {
        this._emptyBlocks.sort((a, b) => a.address - b.address);
        const mergedBlocks: MemoryBlock[] = [];
        let currentBlock: MemoryBlock | null = null;

        for (const block of this._emptyBlocks) {
            if (!currentBlock) {
                currentBlock = block;
            } else if (currentBlock.address + currentBlock.size === block.address) {
                currentBlock.size += block.size;
            } else {
                mergedBlocks.push(currentBlock);
                currentBlock = block;
            }
        }

        if (currentBlock) {
            mergedBlocks.push(currentBlock);
        }

        this._emptyBlocks = mergedBlocks;
    }

    private resize(size: number) {
        if (size > this._buffer.length) {
            const newBuffer = this._createBuffer(size);
            newBuffer.set(this._buffer);
            this._emptyBlocks.push({
                address: this._buffer.length,
                size: size - this._buffer.length,
            });
            this._buffer = newBuffer;
            this._viewer = new DataView(this._buffer.buffer);
            this.mergeEmptyBlocks();
        }
    }

    public allocate(size: number): number {
        let block = this._emptyBlocks.find((block) => block.size >= size);
        while (!block) {
            this.resize(this._buffer.length * 2);
            block = this._emptyBlocks.find((block) => block.size >= size);
        }
        const address = block.address;
        if (block.size === size) {
            this._emptyBlocks.splice(this._emptyBlocks.indexOf(block), 1);
        } else {
            block.address += size;
            block.size -= size;
        }
        return address;
    }

    public free(address: number, size: number) {
        const block = this._emptyBlocks.find((block) => block.address === address);
        if (block) {
            block.size += size;
        } else {
            this._emptyBlocks.push({ address, size });
        }
        this.mergeEmptyBlocks();
    }

    public serialize(): Uint8Array {
        const dataBlocks: MemoryBlock[] = [];
        let offset = 0;
        this._emptyBlocks.sort((a, b) => a.address - b.address);
        for (const block of this._emptyBlocks) {
            if (block.address > offset) {
                dataBlocks.push({
                    address: offset,
                    size: block.address - offset,
                });
            }
            offset = block.address + block.size;
        }
        if (offset < this._buffer.length) {
            dataBlocks.push({
                address: offset,
                size: this._buffer.length - offset,
            });
        }

        let size = 0;
        for (const block of dataBlocks) {
            size += 8; // 4 bytes for address + 4 bytes for size
            size += 8 + block.size;
        }
        const buffer = this._createBuffer(size);
        offset = 0;
        for (const block of dataBlocks) {
            buffer.set(new Uint8Array(new Uint32Array([block.address]).buffer), offset);
            offset += 4;
            buffer.set(new Uint8Array(new Uint32Array([block.size]).buffer), offset);
            offset += 4;
            buffer.set(this._buffer.slice(block.address, block.address + block.size), offset);
            offset += block.size;
        }
        return buffer;
    }

    public allocateFromBlock(block: MemoryBlock) {
        const address = block.address;
        if (block.size === 0) {
            throw new Error('Block is empty');
        }
        while (block.address + block.size > this._buffer.length) {
            this.resize(this._buffer.length * 2);
        }
        let empty = this._emptyBlocks.find((b) => b.address <= address && b.address + b.size >= address + block.size);
        if (!empty) {
            throw new Error('Block is not empty');
        }
        if (empty.address < block.address) {
            this._emptyBlocks.push({
                address: empty.address,
                size: block.address - empty.address,
            });
            empty.address = block.address;
            empty.size -= block.address - empty.address;
        }
        if (empty.size === block.size) {
            this._emptyBlocks.splice(this._emptyBlocks.indexOf(empty), 1);
        } else {
            empty.address += block.size;
            empty.size -= block.size;
        }
    }

    public deserialize(buffer: Uint8Array) {
        const viewer = new DataView(buffer.buffer);
        let offset = 0;
        for (let i = 0; i < buffer.length; i += 8) {
            const address = viewer.getUint32(offset, true);
            const size = viewer.getUint32(offset + 4, true);
            offset += 8;
            this.allocateFromBlock({ address, size });
            this._buffer.set(buffer.slice(offset, offset + size), address);
            offset += size;
        }
    }

    public clear() {
        this._emptyBlocks = [
            {
                address: 0,
                size: this._buffer.length,
            },
        ];
    }
}