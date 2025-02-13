import { MotorInstance } from "../instance";

export class MotorUnsignedShortInteger extends MotorInstance<number> {
    static readonly size = 4;
    protected read(): number {
        return this.memory.dataView.getUint16(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint16(this.address, value, true);
    }
}

export type MotorUint16 = MotorUnsignedShortInteger;