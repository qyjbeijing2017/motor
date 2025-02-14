import { MotorInstance } from "../instance";

export class MotorUnsignedLong extends MotorInstance<bigint> {
    write(value: bigint): void {
        this.memory.dataView.setBigUint64(this.address, value);
    }
    read(): bigint {
        return this.memory.dataView.getBigUint64(this.address);
    }
    static size = 8;
}

export const MotorUint64 = MotorUnsignedLong;