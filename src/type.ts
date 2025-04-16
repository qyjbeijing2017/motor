import { MotorMemory } from "./memory";

export abstract class MotorType<T> {
    abstract readonly size: number;
    abstract setJS(memory: MotorMemory, address: number, value: T): void;
    abstract getJS(memory: MotorMemory, address: number): T;
}

export type MotorJSType<T> = T extends MotorType<infer U> ? U : never;
