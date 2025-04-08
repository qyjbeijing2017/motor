import { Memory } from "../memory";
import { Type } from "../types/type";

export class Stack extends Type<Uint8Array> {
    read(memory: Memory, address: number): Uint8Array<ArrayBufferLike> {
        return memory.buffer.subarray(address, address + this.size);
    }
    write(memory: Memory, address: number, value: Uint8Array<ArrayBufferLike>): void {
        throw new Error("Method not implemented.");
    }
    constructor(public size: number = 4 * 1024 * 1024) {
        super();
    }

}