import { VERSION } from "./global";

export interface ELMemoryOptions {
    version: VERSION;
    name: string;
    defaultSize: number;
    getBuffer: (size: number, before?: Uint8Array) => Uint8Array;
}

const defaultOptions: ELMemoryOptions = {
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

export interface ELBlock {
    readonly start: number;
    readonly length: number;
}

export class ELMemory {
    private _buffer: Uint8Array;
    private _emptyBlocks: ELBlock[];
    private _dataView: DataView;
    private _getBuffer: (size: number, before?: Uint8Array) => Uint8Array;
    get buffer(): Uint8Array {
        return this._buffer;
    }
    get dataView(): DataView {
        return this._dataView;
    }
    constructor(options: Partial<ELMemoryOptions> = {}) {
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

    allocate(size: number): ELBlock {
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
        if (block.length > size) {
            return { start: block.start, length: size };
        } else {
            return block;
        }
    }

    free(block: ELBlock): void {
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
}