import { MotorInstance } from "../instance";

export class MotorLong extends MotorInstance<bigint> {
    write(value: bigint): void {
        this.memory.dataView.setBigInt64(this.address, value);
    }
    read(): bigint {
        return this.memory.dataView.getBigInt64(this.address);
    }
    static size = 8;
}

export const MotorInt64 = MotorLong;