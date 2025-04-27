import { MotorInstance, MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";

export abstract class MotorArray<T extends MotorType<any>> extends MotorInstance<MotorJSType<T>[]> {
    abstract get type(): T;
    abstract get length(): number;
    get js(): MotorJSType<T>[] {
        const result: MotorJSType<T>[] = new Array(this.length);
        for (let i = 0; i < this.length; i++) {
            const address = this.address + i * this.type.size;
            const instance = new this.type(undefined, this.memory, address);
            result[i] = instance.js;
        }
        return result;
    }
    set js(value: MotorJSType<T>[]) {
        for (let i = 0; i < this.length; i++) {
            const address = this.address + i * this.type.size;
            const instance = new this.type(value[i], this.memory, address);
            instance.js = value[i];
        }
    }
}

export type MotorArrayType<T extends MotorType<any>> = {
    readonly size: number;
    new(def?: undefined, memory?: MotorMemory, address?: number): MotorArray<T>;
}

export function createPointer<T extends MotorType<any>>(type: T, length: number): MotorArrayType<T> {
    return class extends MotorArray<T> {
        static readonly size = type.size * length;
        get type(): T {
            return type;
        }
        get length(): number {
            return length;
        }
    };
}
