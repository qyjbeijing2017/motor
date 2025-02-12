import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";

export abstract class MotorPointer<T extends MotorInstance<any>> extends MotorInstance<number> {
    protected read(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }

    protected write(value: number): void {
        this.memory.dataView.setUint32(this.address, value, true);
    }

    abstract get raw(): T;

    delete(): void {
        this.raw.free();
    }

    constructor(defaultValue?: number | MotorPointer<any>, memory?: MotorMemory, address?: number) {
        super(defaultValue ?? 0, memory, address);
    }
}

export function motorDefinePointer<T extends MotorType<any>>(type: T) {
    return class extends MotorPointer<InstanceType<T>> {
        static readonly size = 4;
        get raw(): InstanceType<T> {
            return new type(undefined, this.memory, this.rawValue) as InstanceType<T>;
        }
    };
}

export function motorGetPointer<T extends MotorInstance<any>>(instance: T): MotorPointer<T> {
    const type = motorDefinePointer(instance.constructor as any);
    return new type(instance.address, instance.memory);
}