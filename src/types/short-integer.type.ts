import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorShortInteger extends MotorInstance<number> {
    static readonly size = 4;
    constructor(defaultValue?: number | MotorInstance<number>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getUint16(this.address);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint16(this.address, value);
    }
}

export type MotorUint16 = MotorShortInteger;