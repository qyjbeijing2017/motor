import { MotorType } from "../type";
import { MotorMemory } from "../memory";
import { motorGetFloat8, motorSetFloat8 } from "../utils/float8";
import { getFloat16, setFloat16 } from '@petamoriken/float16';

export class MotorF8 extends MotorType<number> {
    readonly size = 1;
    setJS(memory: MotorMemory, address: number, value: number): void {
        motorSetFloat8(memory.viewer, address, value);
    }
    getJS(memory: MotorMemory, address: number): number {
        return motorGetFloat8(memory.viewer, address);
    }
}

export class MotorF16 extends MotorType<number> {
    readonly size = 2;
    setJS(memory: MotorMemory, address: number, value: number): void {
        setFloat16(memory.viewer, address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return getFloat16(memory.viewer, address, true);
    }
}

export class MotorF32 extends MotorType<number> {
    readonly size = 4;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setFloat32(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getFloat32(address, true);
    }
}

export class MotorF64 extends MotorType<number> {
    readonly size = 8;
    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setFloat64(address, value, true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return memory.viewer.getFloat64(address, true);
    }
}
