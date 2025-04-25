import { MotorInstance, MotorType } from "../instance";
import { MotorMemory } from "../memory";

export abstract class MotorArray<T extends MotorType<any>> extends MotorInstance<(T extends MotorType<infer U> ? U : never)[]> {
    abstract get type(): T;
    abstract get length(): number;

    get js(): (T extends MotorType<infer U> ? U : never)[] {
        const result: (T extends MotorType<infer U> ? U : never)[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(new this.type(undefined, this.memory, this.address + i * this.type.size).js);
        }
        return result;
    }

    set js(value: (T extends MotorType<infer U> ? U : never)[]) {
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

export type MotorArrayType<T extends MotorType<any>> = {
    readonly size: number;
    new (def: (T extends MotorType<infer U> ? U : never)[], memory?: MotorMemory, address?: number): MotorArray<T>;
};

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