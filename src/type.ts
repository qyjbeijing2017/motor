import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";

export interface MotorType<RawType> {
    readonly size: number;
    new(defaultVal?: any, memory?: MotorMemory, address?: number): MotorInstance<RawType>;
}
