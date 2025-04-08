import { Memory } from "../memory";
import { Type } from "./type";

export class Struct<T extends { [key: string]: Type<any> }> extends Type<{ [key in keyof T]: T[key] extends Type<infer U> ? U : never }> {
    constructor(public fields: T) {
        super();
    }
    get size(): number {
        return Object.values(this.fields).reduce((sum, field) => sum + field.size, 0);
    }
    read(memory: any, address: number): { [key in keyof T]: T[key] extends Type<infer U> ? U : never } {
        const result: any = {};
        let offset = 0;
        for (const key in this.fields) {
            const field = this.fields[key];
            result[key] = field.read(memory, address + offset);
            offset += field.size;
        }
        return result;
    }
    write(memory: any, address: number, value: { [key in keyof T]: T[key] extends Type<infer U> ? U : never }): void {
        let offset = 0;
        for (const key in this.fields) {
            const field = this.fields[key];
            field.write(memory, address + offset, value[key]);
            offset += field.size;
        }
    }
    getMemberType<Key extends keyof T>(_: Memory, _1: number, key: Key): T[Key] {
        if (!(key in this.fields)) {
            throw new Error(`Member ${key as string} not found`);
        }
        return this.fields[key];
    }
    getMemberAddress(memory: Memory, address: number, key: string): number {
        if (!(key in this.fields)) {
            throw new Error(`Member ${key} not found`);
        }
        let offset = 0;
        for (const k in this.fields) {
            if (k === key) {
                return address + offset;
            }
            offset += this.fields[k].size;
        }
        throw new Error(`Member ${key} not found`);
    }
    hasMember(memory: Memory, address: number, key: string): boolean {
        return key in this.fields;
    }
}