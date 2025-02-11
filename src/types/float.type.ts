import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorFloat extends MotorInstance<number> {
    static readonly size = 4;
    constructor(defaultValue?: number | MotorInstance<number>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getFloat32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setFloat32(this.address, value, true);
    }
}

export type MotorFloat32 = MotorFloat;