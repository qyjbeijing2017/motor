import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { motorSingleton } from "../utils/singleton";
import { MotorReference } from "./reference.type";

export class MotorArray<RawType, MotorInstanceType extends MotorInstance<RawType> = MotorInstance<RawType>> extends MotorReference {
    static readonly size = 4;
    at(index: number): MotorInstanceType {
        return new this.type(undefined, this.memory, this.address + index * this.type.size);
    }
    constructor(
        readonly type: MotorType<RawType, MotorInstanceType>, 
        readonly length: number, 
        memory: MotorMemory = motorSingleton(MotorMemory),
        address?: number
    ) {
        super(memory.allocate(type.size * length), memory, address);
    }
}