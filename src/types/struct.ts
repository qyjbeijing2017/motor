import { MotorInstance, MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { motorPackageEnvironments } from "../package-environment";

export abstract class MotorStruct<T extends { [key: string]: MotorType<any> }> extends MotorInstance<{ [K in keyof T]: MotorJSType<T[K]> }> {
    abstract get type(): T;

    get js(): { [K in keyof T]: MotorJSType<T[K]> } {
        const result: { [K in keyof T]: MotorJSType<T[K]> } = {} as any;
        let offset = 0;
        for (const key in this.type) {
            result[key] = new this.type[key](undefined, this.memory, this.address + offset).js;
            offset += this.type[key].size;
        }
        return result;
    }

    set js(value: { [K in keyof T]: MotorJSType<T[K]> }) {
        let offset = 0;
        for (const key in this.type) {
            const instance = new this.type[key](value[key], this.memory, this.address + offset);
            instance.js = value[key];
            offset += this.type[key].size;
        }
    }

    get<K extends keyof T>(key: K): InstanceType<T[K]> {
        let offset = 0
        for (const k in this.type) {
            if (k === key as string) {
                return new this.type[k](undefined, this.memory, this.address + offset) as InstanceType<T[K]>;
            }
            offset += this.type[k].size;
        }
        throw new Error(`Key ${key as string} not found in struct`);
    }
}

export type MotorStructType<T extends { [key: string]: MotorType<any> }> = {
    readonly size: number;
    new(def?: { [K in keyof T]: MotorJSType<T[K]> }, memory?: MotorMemory, address?: number): MotorStruct<T>;
}

export function motorCreateStruct<T extends { [key: string]: MotorType<any> }>(type: T): MotorStructType<T> {
    return class extends MotorStruct<T> {
        static readonly size = Object.values(type).reduce((acc, curr) => acc + curr.size, 0);
        get type(): T {
            return type;
        }
    };
}
motorPackageEnvironments['motorCreateStruct'] = motorCreateStruct;
