import { MotorInstance } from "../instance";

export class MotorInteger extends MotorInstance<number> {
    static readonly size = 4;
    protected read(): number {
        return this.memory.dataView.getInt32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setInt32(this.address, value, true);
    }
}

export type MotorInt32 = MotorInteger;