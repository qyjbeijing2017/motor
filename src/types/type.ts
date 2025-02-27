import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";

export type MotorType<T> = {
    readonly size: number;
    new (def?: T, memory?: MotorMemory, address?: number): MotorInstance<T>;
} 