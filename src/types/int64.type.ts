import { MotorInstance } from "./instance";

export class MotorInt64 extends MotorInstance<bigint> {
    static readonly size = 8;
    protected onSetData(val: bigint): void {
        this.memory.dataView.setBigInt64(this.address, val, true);
    }
    protected onGetData(): bigint {
        return this.memory.dataView.getBigInt64(this.address, true);
    }
}

export const MotorLong = MotorInt64;