import { MotorInstance, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorNull } from "./null";

export abstract class MotorPointer<T extends MotorType<any>> extends MotorInstance<number> {
    abstract get type(): T
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }

    get value(): InstanceType<T> | MotorNull {
        if (this.js === 0) {
            return new MotorNull(undefined, this.memory);
        }
        return new this.type(undefined, this.memory, this.js);
    }

    delete(): void {
        this.memory.free(this.js, this.type.size);
        this.js = 0;
    }
}

export type MotorPointerType<T extends MotorType<any>> = {
    readonly size: 8;
    new(def?: number, memory?: MotorMemory, address?: number): MotorPointer<T>;
}

export function motorCreatePointer<T extends MotorType<any>>(type: T): MotorPointerType<T> {
    return class extends MotorPointer<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    }
}