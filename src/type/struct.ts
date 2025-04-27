import { MotorInstance, MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";

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

    get<K extends keyof T>(key: K): MotorJSType<T[K]> {
        const instance = new this.type[key](undefined, this.memory, this.address + this.type[key].size * Number(key));
        return instance.js;
    }
}

export type MotorStructType<T extends { [key: string]: MotorType<any> }> = {
    readonly size: number;
    new(def?: undefined, memory?: MotorMemory, address?: number): MotorStruct<T>;
}

export function motorCreateStruct<T extends { [key: string]: MotorType<any> }>(type: T): MotorStructType<T> {
    return class extends MotorStruct<T> {
        static readonly size = Object.values(type).reduce((acc, curr) => acc + curr.size, 0);
        get type(): T {
            return type;
        }
    };
}
