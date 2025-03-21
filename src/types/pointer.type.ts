import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";

export abstract class MotorPointer<T extends new (def: undefined, memory: MotorMemory, address: number) => MotorInstance<any>> extends MotorInstance<number> {
    protected abstract onGetType(): T;
    get value(): InstanceType<T> {
        if(this.jsVal === 0) {
            throw new Error('Null pointer dereference');
        }
        return new (this.onGetType())(undefined, this.memory, this.jsVal) as InstanceType<T>;
    }
    protected onSetData(val: number): void {
        return this.memory.dataView.setUint32(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
}

export function defineMotorPointer<T extends new () => MotorInstance<any>>(type: T): new (
    def?: InstanceType<T>['jsVal'],
    memory?: MotorMemory,
    address?: number
) => MotorPointer<T> {
    return class extends MotorPointer<T> {
        static size = 4;
        onGetType(): T {
            return type;
        }
    }
}
