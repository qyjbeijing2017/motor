import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorTypeOf } from "../utils/type-of";
import { MotorValue } from "./value.type";


export function motorDefineStruct<StructRawType extends object,
    StructDefinitionType extends { [K in keyof StructRawType]: MotorTypeOf<StructRawType[K], MotorInstance<StructRawType[K]>> } =
    { [K in keyof StructRawType]: MotorTypeOf<StructRawType[K], MotorInstance<StructRawType[K]>> }
>(
    definition: StructDefinitionType
) {
    let size = 0;
    for (const key in definition) {
        size += definition[key].size;
    }

    return class extends MotorValue {
        static readonly size = size;

        get<K extends keyof StructDefinitionType>(key: K): InstanceType<StructDefinitionType[K]> {
            let offset = 0;
            for (const k in definition) {
                if (k === key as string) {
                    return new definition[k](undefined, this.memory, this.address + offset) as any
                }
                offset += definition[k].size;
            }
            throw new Error('Cannot get value');
        }
        constructor(
            defaultValue?: StructRawType,
            memory?: MotorMemory,
            address?: number
        ) {
            super(
                memory,
                address
            );

            if(defaultValue) {
                for(const key in defaultValue) {
                    this.get(key).rawValue = defaultValue[key];
                }
            }
        }
    }
}


export function motorNewStruct<StructRawType extends object,
    StructDefinitionType extends { [K in keyof StructRawType]: MotorTypeOf<StructRawType[K], MotorInstance<StructRawType[K]>> }>(
    definition: StructDefinitionType,
    defaultValue?: StructRawType,
    memory?: MotorMemory,
    address?: number
) {
    return new (motorDefineStruct(definition))(defaultValue, memory, address);
}