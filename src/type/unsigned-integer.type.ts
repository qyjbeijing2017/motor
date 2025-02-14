import { MotorInstance } from "../instance";

export class MotorUnsignedInteger extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setUint32(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getUint32(this.address);
    }
    static size = 4;
}

export const MotorUint32 = MotorUnsignedInteger;