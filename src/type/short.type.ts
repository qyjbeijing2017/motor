import { MotorInstance } from "../instance";

export class MotorShort extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setInt16(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getInt16(this.address);
    }
    static size = 2;
}

export type MotorInt16 = MotorShort;