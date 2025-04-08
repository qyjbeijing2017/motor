import { Memory } from "../memory";

export interface MemberInfo {
    type: Type<any>;
    getAddress: (memory: Memory, address: number) => number;
}

export abstract class Type<T> {
    abstract readonly size: number;
    abstract read(memory: Memory, address: number): T;
    abstract write(memory: Memory, address: number, value: T): void;
    free(memory: Memory, address: number): void {
        memory.free(address, this.size);
    }

    getMemberType(memory: Memory, address: number, key: string): Type<any> {
        throw new Error(`Member ${key} not found`);
    }
    getMemberAddress(memory: Memory, address: number, key: string): number {
        throw new Error(`Member ${key} not found`);
    }

    getIndexType(memory: Memory, address: number, index: number): Type<any> {
        throw new Error(`Index ${index} not found`);
    }
    getIndexAddress(memory: Memory, address: number, index: number): number {
        throw new Error(`Index ${index} not found`);
    }
}