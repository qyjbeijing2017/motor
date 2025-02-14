import { MotorInstance } from "../instance.js";

export class MotorInt8 extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setInt8(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getInt8(this.address);
    }
    static size = 1;
}
