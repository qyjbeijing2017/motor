import { MotorInstance } from "../instance";

export class MotorU8 extends MotorInstance<number> {
    getSize(): number {
        return 1;
    }
    setJS(value: number): void {
        this.memory.viewer.setUint8(this.address, value);
    }
    getJS(): number {
        return this.memory.viewer.getUint8(this.address);
    }
}

export class MotorU16 extends MotorInstance<number> {
    getSize(): number {
        return 2;
    }
    setJS(value: number): void {
        this.memory.viewer.setUint16(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }
}

export class MotorU32 extends MotorInstance<number> {
    getSize(): number {
        return 4;
    }
    setJS(value: number): void {
        this.memory.viewer.setUint32(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }
}

export class MotorU64 extends MotorInstance<bigint> {
    getSize(): number {
        return 8;
    }
    setJS(value: bigint): void {
        this.memory.viewer.setBigUint64(this.address, value, true);
    }
    getJS(): bigint {
        return this.memory.viewer.getBigUint64(this.address, true);
    }
}
