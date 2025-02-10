import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorFloat extends MotorInstance<number> {
    static readonly size = 4;
    constructor(defaultValue: number | MotorInstance<number> = 0, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getFloat32(0);
    }
    protected write(value: number): void {
        this.memory.dataView.setFloat32(0, value);
    }
}