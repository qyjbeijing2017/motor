import { MotorInstance } from "../instance.js";

export class MotorUnsignedLong extends MotorInstance<bigint> {
    write(value: bigint): void {
        this.memory.dataView.setBigUint64(this.address, value);
    }
    read(): bigint {
        return this.memory.dataView.getBigUint64(this.address);
    }
    static size = 8;
}

export const MotorUInt64 = MotorUnsignedLong;