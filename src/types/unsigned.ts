import { MotorType } from "../type";
import { MotorMemory } from "../memory";

export class MotorU8 extends MotorType<number> {
    readonly size = 1;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setUint8(address, value);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getUint8(address);
    }
}

export class MotorU16 extends MotorType<number> {
    readonly size = 2;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setUint16(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getUint16(address, true);
    }
}

export class MotorU32 extends MotorType<number> {
    readonly size = 4;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setUint32(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getUint32(address, true);
    }
}

export class MotorU64 extends MotorType<bigint> {
    readonly size = 8;
    setJS(memory: MotorMemory, address: number, value: bigint): void {
        memory.viewer.setBigUint64(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): bigint {
        return memory.viewer.getBigUint64(address, true);
    }
}
