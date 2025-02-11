import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { MotorTypeOf } from "../utils/type-of";


export abstract class MotorPointer<T extends MotorInstance<any>> extends MotorInstance<number> {
    static size: number = 4;

    protected read(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }

    protected write(value: number): void {
        this.memory.dataView.setUint32(this.address, value, true);
    }

    abstract get raw(): T;

    constructor(defaultValue?: number, memory?: MotorMemory, address?: number) {
        super(defaultValue ?? 0, memory, address);
    }
}

export function motorDefinePointer<T extends MotorType<any>>(type: T): MotorTypeOf<MotorPointer<InstanceType<T>>> {
    return class extends MotorPointer<InstanceType<T>> {
        static size: number = 4;
        get raw(): InstanceType<T> {
            return new type(undefined, this.memory, this.rawValue) as InstanceType<T>;
        }
    } as MotorTypeOf<MotorPointer<InstanceType<T>>>;
}

export function motorGetPointer<T extends MotorInstance<any>>(instance: T): MotorPointer<T> {
    const type = motorDefinePointer(instance.constructor as MotorTypeOf<T>);
    return new type(instance.address, instance.memory);
}