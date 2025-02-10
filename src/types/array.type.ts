import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { motorSingleton } from "../utils/singleton";
import { MotorTypeOf } from "../utils/type-of";
import { MotorValue } from "./value.type";

export function motorDefineArray<
    RawType, 
    MotorInstanceType extends MotorInstance<RawType> = MotorInstance<RawType>,
>(
    type: MotorTypeOf<RawType, MotorInstanceType>, 
    length: number
) {
    return class extends MotorValue {
        static readonly size = type.size * length;
        at(index: number): MotorInstanceType {
            return new type(undefined, this.memory, this.address + index * type.size);
        }

        constructor(
            defaultValue: RawType[] = [],
            memory: MotorMemory = motorSingleton(MotorMemory),
            address: number = memory.allocate(type.size * length)
        ) {
            super(memory, address);
            for (let i = 0; i < length; i++) {
                if (defaultValue[i] !== undefined) {
                    this.at(i).rawValue = defaultValue[i];
                }
            }
        }
    };
}

export function motorNewArray<RawType, MotorInstanceType extends MotorInstance<RawType>>(
    type: MotorTypeOf<RawType, MotorInstanceType>, 
    length: number,
    defaultValue?: RawType[],
    memory?: MotorMemory,
    address?: number
) {
    return new (motorDefineArray(type, length))(defaultValue, memory, address);
}