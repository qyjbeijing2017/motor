import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";

export interface MotorType {
    readonly size: number;
    new (def: any, memory?: MotorMemory, address?: number): MotorInstance;
}