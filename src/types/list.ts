import { Memory } from "../memory";
import { singleton } from "../utils/singleton";
import { Type } from "./type";
import { U32 } from "./uint";

export class List<T extends Type<any>> extends Type<(T extends Type<infer U> ? U : never)[]> {
    constructor(readonly type: T) {
        super();
    }
    get size(): number {
        return 12;
    }
    read(memory: Memory, address: number): (T extends Type<infer U> ? U : never)[] {
        const length = memory.viewer.getUint32(address, true);
        const pointer = memory.viewer.getUint32(address + 4, true);
        const result: (T extends Type<infer U> ? U : never)[] = [];
        for (let i = 0; i < length; i++) {
            result.push(this.type.read(memory, pointer + i * this.type.size));
        }
        return result;
    }
    write(memory: Memory, address: number, value: (T extends Type<infer U> ? U : never)[]): void {
        const listSize = memory.viewer.getUint32(address + 8, true);
        let pointer = memory.viewer.getUint32(address + 4, true);
        if (listSize < value.length) {
            if (listSize > 0) {
                memory.free(pointer, listSize * this.type.size);
            }
            let size = listSize * 2 || 4;
            while (size < value.length) {
                size *= 2;
            }
            pointer = memory.allocate(size * this.type.size);
            memory.viewer.setUint32(address + 4, pointer, true);
            memory.viewer.setUint32(address + 8, size, true);
        }
        for (let i = 0; i < value.length; i++) {
            this.type.write(memory, pointer + i * this.type.size, value[i]);
        }
        memory.viewer.setUint32(address, value.length, true);
    }
    free(memory: Memory, address: number): void {
        const listSize = memory.viewer.getUint32(address + 8, true);
        if (listSize > 0) {
            const pointer = memory.viewer.getUint32(address + 4, true);
            memory.free(pointer, listSize * this.type.size);
        }
        super.free(memory, address);
    }
    getIndexType(memory: Memory, address: number, index: number): Type<any> {
        return this.type;
    }
    getIndexAddress(memory: Memory, address: number, index: number): number {
        const pointer = memory.viewer.getUint32(address + 4, true);
        return pointer + index * this.type.size;
    }
    getMemberAddress(memory: Memory, address: number, key: 'length'): number {
        if (key === 'length') {
            return address;
        }
        throw new Error(`Invalid key: ${key}`);
    }
    getMemberType(memory: Memory, address: number, key: 'length'): U32 {
        if (key === 'length') {
            return singleton(U32);
        }
        throw new Error(`Invalid key: ${key}`);
    }
    hasMember(memory: Memory, address: number, key: string): boolean {
        if (key === 'length') {
            return true;
        }
        return false;
    }
}
