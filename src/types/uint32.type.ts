import { MotorInstance } from "./instance";

export class MotorUint32 extends MotorInstance<number> {
    static readonly size = 4;
    protected onSetData(val: number): void {
        this.memory.dataView.setUint32(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
}

export const MotorUint = MotorUint32;
export const MotorUnsignedInt = MotorUint32;