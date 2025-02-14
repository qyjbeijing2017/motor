import { MotorInstance } from "../instance";

export class MotorInteger extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setInt32(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getInt32(this.address);
    }
    static size = 4;
}

export const MotorInt32 = MotorInteger;