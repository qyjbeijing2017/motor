import { Memory } from "../memory";

export abstract class Type<T> {
    abstract get size(): number;
    abstract read(memory: Memory, address: number): T;
    abstract write(memory: Memory, address: number, value: T): void;
}