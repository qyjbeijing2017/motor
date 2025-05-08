import { MotorInstance, MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { motorPackageEnvironments } from "../package-environment";

export abstract class MotorArray<T extends MotorType<any>> extends MotorInstance<MotorJSType<T>[]> {
    abstract get type(): T;
    abstract get length(): number;
    get js(): MotorJSType<T>[] {
        const result: MotorJSType<T>[] = new Array(this.length);
        for (let i = 0; i < this.length; i++) {
            result[i] = this.at(i).js;
        }
        return result;
    }
    set js(value: MotorJSType<T>[]) {
        for (let i = 0; i < Math.min(value.length, this.length); i++) {
            const instance = this.at(i);
            instance.js = value[i];
        }
    }

    at(index: number): InstanceType<T> {
        const address = this.address + index * this.type.size;
        return new this.type(undefined, this.memory, address) as InstanceType<T>;
    }
}

export type MotorArrayType<T extends MotorType<any>> = {
    readonly size: number;
    new(def?: MotorJSType<T>[], memory?: MotorMemory, address?: number): MotorArray<T>;
}

export function motorCreateArray<T extends MotorType<any>>(type: T, length: number): MotorArrayType<T> {
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
motorPackageEnvironments['motorCreateArray'] = motorCreateArray;
