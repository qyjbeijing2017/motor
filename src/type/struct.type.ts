import { MotorInstance } from "../instance.js";
import { MotorMemory } from "../memory.js";
import { MotorType } from "../type.js";

export abstract class MotorStruct<T extends {[key in keyof T]: MotorInstance<any>}> extends MotorInstance<{[key in keyof T]: (T[key] extends MotorInstance<infer U> ? U : never)}> {
    abstract get<Key extends keyof T>(key: Key): T[Key];
    static define<T extends {[key in keyof T]: MotorType<any>}>(definition: T) {
        let size = 0;
        for (let key in definition) {
            size += definition[key].size;
        }
        return class extends MotorStruct<{[key in keyof T]: InstanceType<T[key]>}> {
            get<Key extends keyof T>(key: Key): InstanceType<T[Key]> {
                let offset = 0
                for (let k in definition) {
                    if (k === key as string) {
                        return new definition[k](undefined, this.memory, this.address + offset) as InstanceType<T[Key]>;
                    }
                    offset += definition[k].size;
                }
                throw new Error("Key not found");
            }
            static readonly size = size;
            write(value: { [key in keyof { [key in keyof T]: InstanceType<T[key]>; }]: { [key in keyof T]: InstanceType<T[key]>; }[key] extends MotorInstance<infer U> ? U : never; }): void {
                for (let key in definition) {
                    this.get(key).write(value[key]);
                }
            }
            read(): { [key in keyof { [key in keyof T]: InstanceType<T[key]>; }]: { [key in keyof T]: InstanceType<T[key]>; }[key] extends MotorInstance<infer U> ? U : never; } {
                let result: { [key in keyof { [key in keyof T]: InstanceType<T[key]>; }]: { [key in keyof T]: InstanceType<T[key]>; }[key] extends MotorInstance<infer U> ? U : never; } = {} as any;
                for (let key in definition) {
                    result[key] = this.get(key).read();
                }
                return result;
            }
        }
    }

    static newStruct<T extends {[key in keyof T]: MotorType<any>}>(
        definition: T, 
        defaultValue?: { [key in keyof { [key in keyof T]: InstanceType<T[key]>; }]: { [key in keyof T]: InstanceType<T[key]>; }[key] extends MotorInstance<infer U> ? U : never; },
        memory?: MotorMemory,
        address?: number
    ) {
        let Struct = this.define(definition);
        return new Struct(defaultValue, memory, address);
    }
}