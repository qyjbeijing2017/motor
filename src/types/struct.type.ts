import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { MotorRawOf } from "../utils/raw-of";

export abstract class MotorStruct<T extends { [key: string]: MotorType<any> }> extends MotorInstance<{ [K in keyof T]: MotorRawOf<InstanceType<T[K]>> }> {
    static define<T extends { [key: string]: MotorType<any> }>(definition: T) {
        let size = 0;
        for (const key in definition) {
            size += definition[key].size;
        }
        return class extends MotorStruct<T> {
            static readonly size = size;

            get<K extends keyof T>(key: K): InstanceType<T[K]> {
                let offset = 0;
                for (const k in definition) {
                    if (k === key as any) {
                        return new definition[k](undefined, this.memory, this.address + offset) as any;
                    }
                    offset += definition[k].size;
                }
                throw new Error("Invalid key");
            }

            protected read(): { [K in keyof T]: MotorRawOf<InstanceType<T[K]>> } {
                let offset = 0;
                let result = {} as any;
                for (const key in definition) {
                    result[key] = new definition[key](undefined, this.memory, this.address + offset).rawValue;
                    offset += definition[key].size;
                }
                return result;
            }

            protected write(value: { [K in keyof T]: MotorRawOf<InstanceType<T[K]>>; }): void {
                let offset = 0;
                for (const key in definition) {
                    new definition[key](value[key], this.memory, this.address + offset);
                    offset += definition[key].size;
                }
            }

            constructor(defaultValue?: { [K in keyof T]?: MotorRawOf<InstanceType<T[K]>> | InstanceType<T[K]> }, memory?: MotorMemory, address?: number) {
                super(undefined, memory, address);
                if (defaultValue) {
                    let offset = 0;
                    for (const key in definition) {
                        if (key in defaultValue) {
                            new definition[key](defaultValue[key], memory, this.address + offset);
                        }
                        offset += definition[key].size;
                    }
                }
            }
        }
    }
}

export function motorDefineStruct<T extends { [key: string]: MotorType<any> }>(definition: T) {
    return MotorStruct.define(definition);
}
