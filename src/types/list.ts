import { MotorInstance, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorReference } from "./reference";

export abstract class MotorList<T extends MotorType<any>> extends MotorReference<(T extends MotorType<infer U> ? U : never)[]> {
    abstract get type(): T;

    get count(): number {
        return this.length / this.type.size;
    }

    get js(): (T extends MotorType<infer U> ? U : never)[] {
        const result: (T extends MotorType<infer U> ? U : never)[] = [];
        for (let i = 0; i < this.count; i++) {
            result.push(new this.type(undefined, this.memory, this.refAddress + i * this.type.size).js);
        }
        return result;
    }

    set js(value: (T extends MotorType<infer U> ? U : never)[]) {
        this.length = value.length * this.type.size;
        for (let i = 0; i < this.count; i++) {
            new this.type(value[i], this.memory, this.refAddress + i * this.type.size);
        }
    }

    at(index: number): InstanceType<T> {
        if (index < 0 || index >= this.count) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return new this.type(undefined, this.memory, this.refAddress + index * this.type.size) as InstanceType<T>;
    }
}

export type MotorListType<T extends MotorType<any>> = {
    readonly size: 8;
    new(def?: (T extends MotorType<infer U> ? U : never)[], memory?: MotorMemory, address?: number): MotorList<T>;
}

export function motorCreateList<T extends MotorType<any>>(type: T): MotorListType<T> {
    return class extends MotorList<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    };
}
