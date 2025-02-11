import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { MotorRawOf } from "../utils/raw-of";

export abstract class MotorArray<T extends MotorInstance<any>> extends MotorInstance<MotorRawOf<T>[]> {
    abstract at(index: number): T;
    abstract get length(): number;

    protected read(): MotorRawOf<T>[] {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.at(i).rawValue);
        }
        return result;
    }
    protected write(value: MotorRawOf<T>[]): void {
        for (let i = 0; i < this.length; i++) {
            this.at(i).rawValue = value[i];
        }
    }
}

export function motorDefineArray<T extends MotorType<any>>(type: T, length: number) {
    return class extends MotorArray<InstanceType<T>> {
        static readonly size = type.size * length;
        get length(): number {
            return length;
        }
        at(index: number): InstanceType<T> {
            return new type(undefined, this.memory, this.address + index * type.size) as any;
        }   
    }
}

export function motorNewArray<T extends MotorType<any>>(
    type: T, 
    length: number, 
    defaultVal: MotorRawOf<InstanceType<T>>[] = [],
    memory?: MotorMemory,
    address?: number
): MotorArray<InstanceType<T>> {
    const arrayType = motorDefineArray(type, length);
    const array = new arrayType(defaultVal, memory, address);
    return array;
}