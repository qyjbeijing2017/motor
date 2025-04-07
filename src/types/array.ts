import { Memory } from "../memory";
import { Type } from "./type";

export class Array<T extends Type<any>> extends Type<T extends Type<infer U> ? U[] : never> {
    constructor(public type: T, public length: number) {
        super();
    }

    get size(): number {
        return this.type.size * this.length;
    }

    read(memory: Memory, address: number): T extends Type<infer U> ? U[] : never {
        const result: any[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.type.read(memory, address + i * this.type.size));
        }
        return result as T extends Type<infer U> ? U[] : never;
    }
    
    write(memory: Memory, address: number, value: T extends Type<infer U> ? U[] : never): void {
        for (let i = 0; i < this.length; i++) {
            this.type.write(memory, address + i * this.type.size, value[i]);
        }
    }
}
