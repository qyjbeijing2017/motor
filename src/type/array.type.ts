import { MotorInstance } from "../instance.js";
import { MotorMemory } from "../memory.js";
import { MotorType } from "../type.js";

export abstract class MotorArray<T extends MotorInstance<any>> extends MotorInstance<(T extends MotorInstance<infer U> ? U : never)[]> {
    abstract at(index: number): T;
    
    static define<T extends MotorType<any>>(type: T, length: number) {
        return class extends MotorArray<InstanceType<T>> {
            at(index: number): InstanceType<T> {
                return new type(undefined, this.memory, this.address + index * type.size) as InstanceType<T>;
            }
            write(value?: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[]): void {
                if(value) {
                    for (let i = 0; i < length; i++) {
                        this.at(i).write(value[i]);
                    }
                }
            }
            read(): (InstanceType<T> extends MotorInstance<infer U> ? U : never)[] {
                let result: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[] = [];
                for (let i = 0; i < length; i++) {
                    result.push(this.at(i).read());
                }
                return result;
            }
            static readonly size = type.size * length;
        }
    }

    static newArray<T extends MotorType<any>>(
        type: T,
        length: number,
        defaultValue?: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[],
        memory?: MotorMemory,
        address?: number
    ) {
        let array = MotorArray.define(type, length);
        return new array(defaultValue, memory, address);
    }
}