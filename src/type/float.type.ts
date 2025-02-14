import { MotorInstance } from "../instance.js";

export class MotorFloat extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setFloat32(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getFloat32(this.address);
    }
    static size = 4;
}

export const MotorFloat32 = MotorFloat;