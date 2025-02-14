import { MotorInstance } from "../instance.js";

export class MotorDouble extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setFloat64(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getFloat64(this.address);
    }
    static size = 8;
}

export const MotorFloat64 = MotorDouble;