import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";
import { motorSizeOf } from "./sizeof";

export type MotorJsType<T extends new (def: undefined, memory: MotorMemory, address: number) => MotorInstance<any>> = ConstructorParameters<T>[0];

export abstract class  MotorArray<T extends new (def: undefined, memory: MotorMemory, address: number) => MotorInstance<any>> extends MotorInstance<MotorJsType<T>[]> {
    protected abstract onGetType(): T;
    protected abstract get length(): number;

    protected onGetData(): MotorJsType<T>[] {
        return Array.from({length: this.length}, (_, i) => this.at(i).jsVal);
    }

    protected onSetData(data: MotorJsType<T>[]): void {
        data.forEach((val, i) => this.at(i).jsVal = val);
    }

    at(index: number): InstanceType<T> {
        if(index < 0 || index >= this.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return new (this.onGetType())(undefined,this.memory, this.address + index * 4) as InstanceType<T>;
    } 
        
}

export function defineArray<T extends new () => MotorInstance<any>>(type: T, length: number): new (
    def?: MotorJsType<T>[],
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
