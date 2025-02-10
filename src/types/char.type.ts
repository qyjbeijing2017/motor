import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorChar extends MotorInstance<string> {
    static readonly size = 1;
    constructor(defaultValue?: string | MotorInstance<string>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): string {
        return String.fromCharCode(this.memory.dataView.getUint8(this.address));
    }
    protected write(value: string): void {
        this.memory.dataView.setUint8(this.address, value.charCodeAt(0));
    }
}