import { Memory } from "../memory";

export abstract class Type {
    abstract get size(): number;
    abstract read(memory: Memory, address: number): any;
    abstract write(memory: Memory, address: number, value: any): void;
}