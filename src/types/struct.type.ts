import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { motorSingleton } from "../utils/singleton";
import { MotorValue } from "./value.type";

export type MotorStructDefinition<T extends object> = {
    [key in keyof T]: MotorType<T[key]>;
}

export function motorDefineStruct<T extends object>(definition: MotorStructDefinition<T>) {
    let structSize = 0;
    for (const key in definition) {
        structSize += definition[key].size;
    }
    return class extends MotorValue {
        static readonly size = structSize;
        get(key: keyof T): MotorInstance<T[keyof T]> {
            let offset = 0;
            for (const k in definition) {
                if (k === key) {
                    return new definition[k](undefined, this.memory, this.address + offset);
                }
                offset += definition[k].size;
            }
            throw new Error(`Key ${key.toString()} not found in struct`);
        }
        constructor(
            defaultValue?: T,
            memory: MotorMemory = motorSingleton(MotorMemory),
            address: number = memory.allocate(structSize)
        ) {
            super(memory, address);
            if (defaultValue) {
                for (const key in definition) {
                    this.get(key).rawValue = defaultValue[key];
                }
            }
        }
    };
}
