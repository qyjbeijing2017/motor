import { MotorInstance, MotorJsType, MotorType } from "../instance";
import { MotorMemory } from "../memory";

export type MotorStructMemberType = { [key: string]: MotorType<any> }
export type MotorStructJsType<T extends MotorStructMemberType> = {
    [key in keyof T]: MotorJsType<InstanceType<T[key]>>;
}

export type MotorStructType<T extends MotorStructMemberType> = {
    readonly size: number;
    new(def?: MotorStructJsType<T>, memory?: MotorMemory, address?: number): MotorStruct<T>;
}

export abstract class MotorStruct<T extends MotorStructMemberType> extends MotorInstance<MotorStructJsType<T>> {
    abstract get types(): MotorStructMemberType;
    get js(): MotorStructJsType<T> {
        let offset = 0;
        const result: Partial<MotorStructJsType<T>> = {};
        for (const key in this.types) {
            const type = this.types[key];
            const instance = new type(undefined, this.memory, this.address + offset);
            offset += type.size;
            result[key as keyof T] = instance.js;
        }
        return result as MotorStructJsType<T>;
    }
    set js(value: MotorStructJsType<T>) {
        let offset = 0;
        for (const key in this.types) {
            const type = this.types[key];
            new type(value[key as keyof T], this.memory, this.address + offset);
            offset += type.size;
        }
    }
    get(key: keyof T): MotorInstance<any> {
        let offset = 0;
        for (const k in this.types) {
            if (k === key) {
                return new this.types[k](undefined, this.memory, this.address + offset);
            }
            offset += this.types[k].size;
        }
        throw new Error(`Key ${key as string} not found in ${this.constructor.name}`);
    }
}

export function motorCreateStruct<T extends MotorStructMemberType>(types: T): MotorStructType<T> {
    let offset = 0;
    for (const key in types) {
        offset += types[key].size;
    }
    return class extends MotorStruct<T> {
        static readonly size = offset;
        get types(): T {
            return types;
        }
    }
}
