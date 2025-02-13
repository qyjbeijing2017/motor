import { VERSION } from "./global";

export interface MotorMemoryOptions {
    version: VERSION;
    name: string;
    defaultSize: number;
    getBuffer: (size: number, before?: Uint8Array) => Uint8Array;
}

const defaultOptions: MotorMemoryOptions = {
    version: VERSION.V1,
    name: 'ELS',
    defaultSize: 1024 * 10,
    getBuffer: (size: number, before?: Uint8Array) => {
        const memory = new Uint8Array(size);
        if (before) {
            memory.set(before);
        }
        return memory;
    },
};

export interface MotorBlock {
    readonly start: number;
    readonly length: number;
}

export interface MemorySaveBlock {
    start: number;
    length: number;
    data: Uint8Array;
}

export class MotorMemory {
    private _buffer: Uint8Array;
    private _emptyBlocks: MotorBlock[];
    private _dataView: DataView;
    private _getBuffer: (size: number, before?: Uint8Array) => Uint8Array;

    get buffer(): Uint8Array {
        return this._buffer;
    }

    get dataView(): DataView {
        return this._dataView;
    }

    constructor(options: Partial<MotorMemoryOptions> = {}) {
        const currentOptions = { ...defaultOptions, ...options };
        this._getBuffer = currentOptions.getBuffer;
        this._buffer = this._getBuffer(currentOptions.defaultSize);
        this._emptyBlocks = [{ start: 0, length: currentOptions.defaultSize }];
        this._dataView = new DataView(this._buffer.buffer);
    }

    private _extend(size: number): void {
        this._buffer = this._getBuffer(size + this._buffer.length, this._buffer);
        this._dataView = new DataView(this._buffer.buffer);
        this.free({ start: this._buffer.length, length: size });
    }

    allocate(size: number): number {
        if(size == 0) {
            return 0;
        }
        let block = this._emptyBlocks.find(b => b.length >= size);
        if (!block) {
            this._extend(Math.max(size, this._buffer.length));
            block = this._emptyBlocks.find(b => b.length >= size);
        }
        if (!block) {
            throw new Error('Cannot allocate memory');
        }
        if (block.length > size) {
            this._emptyBlocks.push({ start: block.start + size, length: block.length - size });
        }
        this._emptyBlocks = this._emptyBlocks.filter(b => b.start !== block.start);
        this._emptyBlocks.sort((a, b) => a.start - b.start);
        return block.start;
    }

    free(block: MotorBlock): void {
        const blockBefore = this._emptyBlocks.find(b => b.start + b.length === block.start);
        const blockAfter = this._emptyBlocks.find(b => b.start === block.start + block.length);
        if (blockBefore) {
            this._emptyBlocks = this._emptyBlocks.filter(b => b.start == blockBefore.start);
            this._emptyBlocks.push({ start: blockBefore.start, length: blockBefore.length + block.length });
        } else if (blockAfter) {
            this._emptyBlocks = this._emptyBlocks.filter(b => b.start == blockAfter.start);
            this._emptyBlocks.push({ start: block.start, length: block.length + blockAfter.length });
        } else {
            this._emptyBlocks.push(block);
        }
        this._emptyBlocks.sort((a, b) => a.start - b.start);
    }

    shrink(size?: number): void {
        const lastBlock = this._emptyBlocks[this._emptyBlocks.length - 1];
        if (size === undefined) {
            size = lastBlock.length
        }
        size = Math.min(size, lastBlock.length);
        const sizeDiff = this._buffer.length - size;
        this._buffer = this._buffer.slice(0, sizeDiff);
        this._dataView = new DataView(this._buffer.buffer);
        if(size < lastBlock.length) {
            this._emptyBlocks[this._emptyBlocks.length - 1] = { start: lastBlock.start, length: size };
        } else {
            this._emptyBlocks.pop();
        }

    }

    save() {
        let offset = 0;
        const blocks: MemorySaveBlock[] = [];
        this._emptyBlocks.forEach(block => {
            const length = block.start - offset;
            if(length != 0) {
                blocks.push({ start: offset, length, data: this._buffer.slice(offset, block.start) });
            }
            offset = block.start + block.length;
        });
        const buffer = new Uint8Array(blocks.reduce((acc, block) => acc + block.length + 8, 0));
        let view = new DataView(buffer.buffer);
        offset = 0;
        blocks.forEach(block => {
            view.setUint32(offset, block.start, true);
            view.setUint32(offset + 4, block.length, true);
            buffer.set(block.data, offset + 8);
            offset += block.length + 8;
        });
        return buffer;
    }
    
    clear(): void {
        this._emptyBlocks = [{ start: 0, length: this._buffer.length }];
    }

    private allocateBlock(start: number, length: number): void {
        const block = this._emptyBlocks.find(b => b.start <= start && b.start + b.length >= start + length);
        if (!block) {
            throw new Error('Cannot allocate block');
        }
        if (block.start < start) {
            this._emptyBlocks.push({ start: block.start, length: start - block.start });
        }
        if (block.start + block.length > start + length) {
            this._emptyBlocks.push({ start: start + length, length: block.start + block.length - start - length });
        }
        this._emptyBlocks = this._emptyBlocks.filter(b => b.start !== block.start);
        this._emptyBlocks.sort((a, b) => a.start - b.start);
    }

    load(buffer: Uint8Array, loadOffset: number): void {
        if(loadOffset + buffer.length > this._buffer.length) {
            this._extend(loadOffset + buffer.length - this._buffer.length);
        }
        const blocks: MemorySaveBlock[] = [];
        const dataView = new DataView(buffer.buffer);
        let offset = 0;
        while(offset < buffer.length) {
            const start = dataView.getUint32(offset, true);
            const length = dataView.getUint32(offset + 4, true);
            blocks.push({ start, length, data: buffer.slice(offset + 8, offset + 8 + length) });
            offset += length + 8;
        }
        blocks.forEach(block => {
            this.allocateBlock(loadOffset + block.start, block.length);
            this._buffer.set(block.data, loadOffset + block.start);
        });
    }

    copy(from: number, to: number, length: number): void {
        this._buffer.copyWithin(to, from, from + length);
    }
}