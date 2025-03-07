import { MotorInstance } from "./instance";

export class MotorUint64 extends MotorInstance<bigint> {
    static readonly size = 8;
    protected onSetData(val: bigint): void {
        this.memory.dataView.setBigUint64(this.address, val, true);
    }
    protected onGetData(): bigint {
        return this.memory.dataView.getBigUint64(this.address, true);
    }
}

export const MotorUnsignedLong = MotorUint64;