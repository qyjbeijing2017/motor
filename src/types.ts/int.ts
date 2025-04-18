import { MotorInstance } from "../instance";

export class MotorI8 extends MotorInstance<number> {
    getSize(): number {
        return 1;
    }
    setJS(value: number): void {
        this.memory.viewer.setInt8(this.address, value);
    }
    getJS(): number {
        return this.memory.viewer.getInt8(this.address);
    }
}

export class MotorI16 extends MotorInstance<number> {
    getSize(): number {
        return 2;
    }
    setJS(value: number): void {
        this.memory.viewer.setInt16(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }
}

export class MotorI32 extends MotorInstance<number> {
    getSize(): number {
        return 4;
    }
    setJS(value: number): void {
        this.memory.viewer.setInt32(this.address, value, true);
    }
    getJS(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }
}

export class MotorI64 extends MotorInstance<bigint> {
    getSize(): number {
        return 8;
    }
    setJS(value: bigint): void {
        this.memory.viewer.setBigInt64(this.address, value, true);
    }
    getJS(): bigint {
        return this.memory.viewer.getBigInt64(this.address, true);
    }
}
