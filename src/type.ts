import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";

export interface MotorType<T> {
    readonly size: number;
    new (def: T, memory?: MotorMemory, address?: number): MotorInstance<T>;
}