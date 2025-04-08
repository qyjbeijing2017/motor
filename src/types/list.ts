import { Memory } from "../memory";
import { Type } from "./type";

export class List<T extends Type<any>> extends Type<(T extends Type<infer U> ? U : never)[]> {
    constructor(readonly type: T) {
        super();
    }
    get size(): number {
        return 8;
    }
    read(memory: Memory, address: number): (T extends Type<infer U> ? U : never)[] {
        const length = memory.viewer.getUint32(address);
        const pointer = memory.viewer.getUint32(address + 4);
        const result: (T extends Type<infer U> ? U : never)[] = [];
        for (let i = 0; i < length; i++) {
            result.push(this.type.read(memory, pointer + i * this.type.size));
        }
        return result;
    }
    write(memory: Memory, address: number, value: (T extends Type<infer U> ? U : never)[]): void {
        const lengthBefore = memory.viewer.getUint32(address, true);
        if (lengthBefore > 0) {
            const pointerBefore = memory.viewer.getUint32(address + 4, true);
            memory.free(pointerBefore, lengthBefore * this.type.size);
        }
        const length = value.length;
        const pointer = memory.allocate(length * this.type.size);
        for (let i = 0; i < length; i++) {
            this.type.write(memory, pointer + i * this.type.size, value[i]);
        }
        memory.viewer.setUint32(address, length, true);
        memory.viewer.setUint32(address + 4, pointer, true);
    }
    free(memory: Memory, address: number): void {
        const length = memory.viewer.getUint32(address, true);
        if (length > 0) {
            const pointer = memory.viewer.getUint32(address + 4, true);
            memory.free(pointer, length * this.type.size);
        }
        super.free(memory, address);
    }
}
