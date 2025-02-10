import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export type MotorTypeOf<RawType, MotorInstanceType extends MotorInstance<RawType> = MotorInstance<RawType>> = {
    size: number;
    new(defaultVal?: any, memory?: MotorMemory, address?: number): MotorInstanceType;
};