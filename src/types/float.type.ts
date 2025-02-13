import { MotorInstance } from "../instance";

export class MotorFloat extends MotorInstance<number> {
    static readonly size = 4;
    protected read(): number {
        return this.memory.dataView.getFloat32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setFloat32(this.address, value, true);
    }
}

export type MotorFloat32 = MotorFloat;