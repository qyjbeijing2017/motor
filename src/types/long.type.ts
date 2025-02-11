import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorLong extends MotorInstance<bigint> {
    static readonly size = 8;
    constructor(defaultValue?: bigint | MotorInstance<bigint>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
    }
    protected read(): bigint {
        return this.memory.dataView.getBigInt64(this.address, true);
    }
    protected write(value: bigint): void {
        this.memory.dataView.setBigInt64(this.address, value, true);
    }
}