import { MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorNull } from "./null";
import { MotorU64 } from "./u64";

export abstract class MotorPointer<T extends MotorType<any>> extends MotorU64 {
    abstract get type(): T;
    get value(): InstanceType<T> | MotorNull {
        if (this.js === 0) {
            return new MotorNull(undefined, this.memory);
        }
        return new this.type(undefined, this.memory, this.js);
    }

    delete() {
        this.value.free();
        this.js = 0;
    }
}

export type MotorPointerType<T extends MotorType<any>> = {
    readonly size: 8;
    new(def?: undefined, memory?: MotorMemory, address?: number): MotorPointer<T>;
}

export function createPointer<T extends MotorType<any>>(type: T): MotorPointerType<T> {
    return class extends MotorPointer<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    };
}
