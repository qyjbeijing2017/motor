import { MotorInstance, MotorType } from "../instance";
import { MotorMemory } from "../memory";

export abstract class MotorArray<T> extends MotorInstance<T[]> {
    abstract get type(): MotorType<T>;
    abstract get length(): number;

    get js(): T[] {
        const result: T[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(new this.type(undefined, this.memory, this.address + i * this.type.size).js);
        }
        return result;
    }

    set js(value: T[]) {
        for (let i = 0; i < this.length; i++) {
            new this.type(value[i], this.memory, this.address + i * this.type.size);
        }
    }

    at(index: number): MotorInstance<any> {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return new this.type(undefined, this.memory, this.address + index * this.type.size);
    }
}

export type MotorArrayType<T> = {
    readonly size: number;
    new (def: T[], memory?: MotorMemory, address?: number): MotorArray<T>;
};

export function motorCreateArray<T>(type: MotorType<T>, length: number): MotorArrayType<T> {
    return class extends MotorArray<T> {
        static readonly size = type.size * length;
        get type(): MotorType<T> {
            return type;
        }
        get length(): number {
            return length;
        }
    };
}