import { MotorInstance } from "../instance";
import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { motorGetFloat8, motorSetFloat8 } from "../utils/float8";

export class MotorF8 extends MotorInstance<number> {
    static readonly size = 1;
    set js(value: number) {
        motorSetFloat8(this.memory.viewer, this.address, value);
    }
    get js(): number {
        return motorGetFloat8(this.memory.viewer, this.address);
    }
}

export class MotorF16 extends MotorInstance<number> {
    static readonly size = 2;
    set js(value: number) {
        setFloat16(this.memory.viewer, this.address, value);
    }
    get js(): number {
        return getFloat16(this.memory.viewer, this.address);
    }
}

export class MotorF32 extends MotorInstance<number> {
    static readonly size = 4;
    set js(value: number) {
        this.memory.viewer.setFloat32(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getFloat32(this.address, true);
    }
}

export class MotorF64 extends MotorInstance<number> {
    static readonly size = 8;
    set js(value: number) {
        this.memory.viewer.setFloat64(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getFloat64(this.address, true);
    }
}
