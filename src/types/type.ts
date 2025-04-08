import { Memory } from "../memory";

export abstract class Type<T> {
    abstract readonly size: number;
    abstract read(memory: Memory, address: number): T;
    abstract write(memory: Memory, address: number, value: T): void;
    free(memory: Memory, address: number): void {
        memory.free(address, this.size);
    }
}