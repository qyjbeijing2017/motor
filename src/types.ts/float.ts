import { MotorInstance } from "../instance";
import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { motorGetFloat8, motorSetFloat8 } from "../utils/float8";

export class MotorF8 extends MotorInstance<number> {
    getSize(): number {
        return 1;
    }
    setJS(value: number): void {
        motorSetFloat8(this.memory.viewer, this.address, value);
    }
    getJS(): number {
        return motorGetFloat8(this.memory.viewer, this.address);
    }
}

export class MotorF16 extends MotorInstance<number> {
    getSize(): number {
        return 2;
    }
    setJS(value: number): void {
        setFloat16(this.memory.viewer, this.address, value, true);
    }
    getJS(): number {
        return getFloat16(this.memory.viewer, this.address, true);
    }
}

export class MotorF32 extends MotorInstance<number> {
    getSize(): number {
        return 4;
    }
    setJS(value: number): void {
        this.memory.viewer.setFloat32(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getFloat32(this.address, true);
    }
}

export class MotorF64 extends MotorInstance<number> {
    getSize(): number {
        return 8;
    }
    setJS(value: number): void {
        this.memory.viewer.setFloat64(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getFloat64(this.address, true);
    }
}
