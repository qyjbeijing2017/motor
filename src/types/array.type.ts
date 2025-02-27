import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";
import { motorSizeOf } from "./sizeof";

export abstract class  MotorArray<T extends new (def: undefined, memory: MotorMemory, address: number) => MotorInstance<any>> extends MotorInstance<(InstanceType<T>['jsVal'])[]> {
    protected abstract onGetType(): T;
    protected abstract get length(): number;

    at(index: number): InstanceType<T> {
        if(index < 0 || index >= this.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return new (this.onGetType())(undefined,this.memory, this.address + index * motorSizeOf(this.onGetType())) as InstanceType<T>;
    } 

    protected onGetData(): InstanceType<T>['jsVal'][] {
        return Array.from({length: this.length}, (_, i) => this.at(i).jsVal);
    }

    protected onSetData(data: InstanceType<T>['jsVal'][]): void {
        data.forEach((val, i) => this.at(i).jsVal = val);
    }
}

export function defineMotorArray<T extends new () => MotorInstance<any>>(type: T, length: number): new (
    def?: InstanceType<T>['jsVal'][],
    memory?: MotorMemory,
    address?: number
) => MotorArray<T> {
    return class extends MotorArray<T> {
        static size = length * motorSizeOf(type);
        onGetType(): T {
            return type;
        }
        get length(): number {
            return length;
        }
    }
}
