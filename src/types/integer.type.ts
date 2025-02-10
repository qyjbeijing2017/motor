import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorInteger extends MotorInstance<number> {
    static readonly size = 4;
    constructor(defaultValue?: number | MotorInstance<number>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getInt32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setInt32(this.address, value, true);
    }
}