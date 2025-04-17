import { MotorMemory } from "./memory";

export abstract class MotorType<T> {
    abstract readonly size: number;
    abstract setJS(memory: MotorMemory, address: number, value: T): void;
    abstract getJS(memory: MotorMemory, address: number): T;
    member(name: string): MotorType<any> {
        throw new Error(`Member ${name} not found on ${this.constructor.name}`);
    }
}

export type MotorJSType<T> = T extends MotorType<infer U> ? U : never;
