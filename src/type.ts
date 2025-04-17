import { MotorMemory } from "./memory";

export abstract class MotorType<T> {
    abstract readonly size: number;
    abstract setJS(memory: MotorMemory, address: number, value: T): void;
    abstract getJS(memory: MotorMemory, address: number): T;
    getMemberType(memory: MotorMemory, address: number, key: string): MotorType<any> {
        throw new Error(`Member ${key} not found`);
    }
    getMemberAddress(memory: MotorMemory, address: number, key: string): number {
        throw new Error(`Member ${key} not found`);
    }
    getIndexType(memory: MotorMemory, address: number, index: number): MotorType<any> {
        throw new Error(`Index ${index} not found`);
    }
    getIndexAddress(memory: MotorMemory, address: number, index: number): number {
        throw new Error(`Index ${index} not found`);
    }
}
export type MotorJSType<T> = T extends MotorType<infer U> ? U : never;
