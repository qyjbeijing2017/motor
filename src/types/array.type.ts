import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { motorSingleton } from "../utils/singleton";
import { MotorValue } from "./value.type";

export class MotorArray<RawType, MotorInstanceType extends MotorInstance<RawType> = MotorInstance<RawType>> extends MotorValue {
    static readonly size = 4;
    at(index: number): MotorInstanceType {
        return new this.type(undefined, this.memory, this.address + index * this.type.size);
    }
    constructor(
        readonly type: MotorType<RawType, MotorInstanceType>,
        readonly length: number,
        readonly defaultValue: RawType[] = [],
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
}