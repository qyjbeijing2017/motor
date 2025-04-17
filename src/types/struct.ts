import { MotorType } from "../type";
import { MotorMemory } from "../memory";

export type MotorStructMember = { [key: string]: MotorType<any> };
export type MotorStructJSType<T extends MotorStructMember> = { [K in keyof T]: T[K] extends MotorType<infer U> ? U : never };

export class MotorStruct<T extends MotorStructMember> extends MotorType<MotorStructJSType<T>> {
    constructor(readonly types: T) {
        super();
    }

    get size(): number {
        return Object.values(this.types).reduce((sum, type) => sum + type.size, 0);
    }

    setJS(memory: MotorMemory, address: number, value: MotorStructJSType<T>): void {
        let offset = 0;
        for (const key in this.types) {
            const type = this.types[key];
            type.setJS(memory, address + offset, value[key]);
            offset += type.size;
        }
    }

    getJS(memory: MotorMemory, address: number): MotorStructJSType<T> {
        const result: Partial<MotorStructJSType<T>> = {};
        let offset = 0;
        for (const key in this.types) {
            const type = this.types[key];
            result[key] = type.getJS(memory, address + offset);
            offset += type.size;
        }
        return result as MotorStructJSType<T>;
    }

    getMemberType(_memory: MotorMemory, _address: number, key: keyof T): MotorType<any> {
        for (const k in this.types) {
            if (k === key) {
                return this.types[k];
            }
            const type = this.types[k];
        }
        throw new Error(`Member ${key as string} not found in struct`);
    }

    getMemberAddress(_memory: MotorMemory, address: number, key: string): number {
        let offset = 0;
        for (const k in this.types) {
            if (k === key) {
                return address + offset;
            }
            const type = this.types[k];
            offset += type.size;
        }
        throw new Error(`Member ${key} not found in struct`);
    }
}