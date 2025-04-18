import { MotorInstance, MotorType } from "../instance";
import { MotorMemory } from "../memory";

export abstract class Pointer<T extends MotorType<any>> extends MotorInstance<number> {
    abstract get type(): T
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }
}

export type PointerType<T extends MotorType<any>> = {
    readonly size: 8;
    new (def?: number, memory?: MotorMemory, address?: number): Pointer<T>;
}

export function motorCreatePointer<T extends MotorType<any>>(type: T): PointerType<T> {
    return class extends Pointer<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    }
}