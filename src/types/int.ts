import { MotorType } from "../type";
import { MotorMemory } from "../memory";

export class MotorI8 extends MotorType<number> {
    readonly size = 1;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setInt8(address, value);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getInt8(address);
    }
}

export class MotorI16 extends MotorType<number> {
    readonly size = 2;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setInt16(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getInt16(address, true);
    }
}

export class MotorI32 extends MotorType<number> {
    readonly size = 4;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setInt32(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getInt32(address, true);
    }
}

export class MotorI64 extends MotorType<number> {
    readonly size = 8;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setBigInt64(address, BigInt(Math.floor(value)), true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return Number(memory.viewer.getBigInt64(address, true));
    }
}