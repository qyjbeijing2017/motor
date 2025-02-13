import { MotorInstance } from "../instance";

export class MotorLong extends MotorInstance<bigint> {
    static readonly size = 8;
    protected read(): bigint {
        return this.memory.dataView.getBigInt64(this.address, true);
    }
    protected write(value: bigint): void {
        this.memory.dataView.setBigInt64(this.address, value, true);
    }
}