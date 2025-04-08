import { Memory } from "../memory";
import { Type } from "./type";

export class Pointer<T extends Type<any>> extends Type<number> {
    private static readonly map = new Map<Type<any>, Pointer<any>>();
    get size(): number {
        return 4;
    }
    read(memory: Memory, address: number): number {
        return memory.viewer.getUint32(address, true);
    }
    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setUint32(address, value, true);
    }
    getMemberType(memory: Memory, address: number, key: 'value'): T {
        return this.type
    }
    getMemberAddress(memory: Memory, address: number, key: string): number {
        return this.read(memory, address);
    }
    constructor(public type: T) {
        super();
        if (Pointer.map.has(type)) {
            return Pointer.map.get(type)!;
        }
        Pointer.map.set(type, this);
    }
}