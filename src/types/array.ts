import { Memory } from "../memory";
import { Type } from "./type";

export class MotorArray<T extends Type<any>> extends Type<T extends Type<infer U> ? U[] : never> {
    get size(): number {
        return this.length * this.type.size;
    }
    constructor(readonly type: T, readonly length: number) {
        super();
    }
    read(memory: Memory, address: number): T extends Type<infer U> ? U[] : never {
        const result: any[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.type.read(memory, address + i * this.type.size));
        }
        return result as T extends Type<infer U> ? U[] : never;
    }
    write(memory: Memory, address: number, value: T extends Type<infer U> ? U[] : never): void {
        for (let i = 0; i < value.length; i++) {
            if(value.length > this.length) {
                throw new Error('Out of bounds: ' + value.length + ' > ' + this.length);
            }
            this.type.write(memory, address + i * this.type.size, value[i]);
        }
    }

    getIndexType(memory: Memory, address: number, index: number): Type<any> {
        if (index >= this.length) {
            throw new Error(`Index ${index} out of bounds`);
        }
        return this.type;
    }
    getIndexAddress(memory: Memory, address: number, index: number): number {
        if (index >= this.length) {
            throw new Error(`Index ${index} out of bounds`);
        }
        return address + index * this.type.size;
    }
}
