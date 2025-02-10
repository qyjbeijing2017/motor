import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export abstract class MotorValue extends MotorInstance<number> {
    constructor(
        memory?: MotorMemory,
        address?: number,
    ) {
        super(undefined, memory, address);
    }
    protected read(): number {
        return this.address
    }
    protected write(value: number): void {
        throw new Error("Could not write to MotorValue");
    }
}