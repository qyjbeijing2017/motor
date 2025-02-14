import { MotorInstance } from "./instance.js";
import { MotorMemory } from "./memory.js";

export interface MotorType<T> {
    readonly size: number;
    new (def: T, memory?: MotorMemory, address?: number): MotorInstance<T>;
}