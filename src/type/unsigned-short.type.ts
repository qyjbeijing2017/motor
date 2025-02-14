import { MotorInstance } from "../instance";

export class MotorUnsignedShort extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setUint16(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getUint16(this.address);
    }
    static size = 2;
}

export const MotorUint16 = MotorUnsignedShort;