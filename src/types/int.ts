import { MotorInstance } from "../instance";

export class MotorI8 extends MotorInstance<number> {
    static readonly size = 1;
    set js(value: number) {
        this.memory.viewer.setInt8(this.address, value);
    }
    get js(): number {
        return this.memory.viewer.getInt8(this.address);
    }
}

export class MotorI16 extends MotorInstance<number> {
    static readonly size = 2;
    set js(value: number) {
        this.memory.viewer.setInt16(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }
}

export class MotorI32 extends MotorInstance<number> {
    static readonly size = 4;
    set js(value: number) {
        this.memory.viewer.setInt32(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }
}

export class MotorI64 extends MotorInstance<number> {
    static readonly size = 8;
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address, BigInt(Math.floor(value)), true);
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address, true));
    }
}
