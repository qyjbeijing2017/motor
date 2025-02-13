import { MotorInstance } from "../instance";

export class MotorUnsignedInteger extends MotorInstance<number> {
    static readonly size = 4;
    protected read(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint32(this.address, value, true);
    }
}

export type MotorUint32 = MotorUnsignedInteger;