import { MotorInstance } from "../instance";

export class MotorU8 extends MotorInstance<number> {
    static readonly size = 1;
    set js(value: number) {
        this.memory.viewer.setUint8(this.address, value);
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address);
    }
}

export class MotorU16 extends MotorInstance<number> {
    static readonly size = 2;
    set js(value: number) {
        this.memory.viewer.setUint16(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }
}

export class MotorU32 extends MotorInstance<number> {
    static readonly size = 4;
    set js(value: number) {
        this.memory.viewer.setUint32(this.address, value, true);
    }
    get js(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }
}

export class MotorU64 extends MotorInstance<number> {
    static readonly size = 8;
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(Math.floor(value)), true);
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
}
