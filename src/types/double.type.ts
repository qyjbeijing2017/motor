import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorDouble extends MotorInstance<number> {
    static readonly size = 8;
    constructor(defaultValue?: number | MotorInstance<number>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getFloat64(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setFloat64(this.address, value, true);
    }
}

export type MotorFloat64 = MotorDouble;