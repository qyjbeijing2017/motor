import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorUnsignedShortInteger extends MotorInstance<number> {
    static readonly size = 4;
    constructor(defaultValue?: number | MotorInstance<number>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): number {
        return this.memory.dataView.getUint16(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint16(this.address, value, true);
    }
}

export type MotorUint16 = MotorUnsignedShortInteger;