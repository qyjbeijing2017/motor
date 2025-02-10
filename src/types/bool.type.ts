import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorBool extends MotorInstance<boolean> {
    static readonly size = 1;
    constructor(defaultValue?: boolean | MotorInstance<boolean>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): boolean {
        return this.memory.dataView.getUint8(this.address) !== 0;
    }
    protected write(value: boolean): void {
        this.memory.dataView.setUint8(this.address, value ? 1 : 0);
    }
}