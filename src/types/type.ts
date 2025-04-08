import { Memory } from "../memory";

export abstract class Type<T> {
    abstract get size(): number;
    abstract read(memory: Memory, address: number): T;
    abstract write(memory: Memory, address: number, value: T): void;
    free(memory: Memory, address: number): void {
        memory.free(address, this.size);
    }
    getType(key: string): Type<any> {
        throw new Error("get method not implemented for this type");
    }
    getOffset(key: string): number {
        throw new Error("get method not implemented for this type");
    }
    getIndexType(index: number): Type<any> {
        throw new Error("getSubType method not implemented for this type");
    }
    getPointerType(): Type<any> {
        throw new Error("getPointerType method not implemented for this type");
    }
}