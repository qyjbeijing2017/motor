import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";

export interface MotorType<RawType, MotorInstanceType extends MotorInstance<RawType> = MotorInstance<RawType>> {
    readonly size: number;
    new(defaultVal?: any, memory?: MotorMemory, address?: number): MotorInstanceType;
}
