import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { MotorRawOf } from "../utils/raw-of";

export function motorDefineArray<T extends MotorType<any>>(type: T, length: number) {
    return class extends MotorInstance<MotorRawOf<InstanceType<T>>[]> {
        protected read(): MotorRawOf<InstanceType<T>>[] {
            let result = [];
            for (let i = 0; i < length; i++) {
                result.push(new type(undefined, this.memory, this.address + i * type.size).rawValue);
            }
            return result;
        }
        protected write(value: MotorRawOf<InstanceType<T>>[]): void {
            for (let i = 0; i < length; i++) {
                new type(value[i], this.memory, this.address + i * type.size).rawValue = value[i];
            }
        }
        static readonly size = type.size * length;

        at(index: number): InstanceType<T> {
            return new type(undefined, this.memory, this.address + index * type.size) as any;
        }

        constructor(defaultVal?: MotorRawOf<InstanceType<T>>[], memory?: MotorMemory, address?: number) {
            super(defaultVal, memory, address);
        }
        
    }
}
