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
    getPointerType(): T {
        return this.type;
    }
    constructor(public type: T) {
        super();
        if (Pointer.map.has(type)) {
            return Pointer.map.get(type)!;
        }
        Pointer.map.set(type, this);
    }
}