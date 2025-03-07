import { MotorInstance } from "./instance";

export class MotorUint8 extends MotorInstance<number> {
    static readonly size = 1;
    protected onSetData(val: number): void {
        this.memory.dataView.setUint8(this.address, val);
    }
    protected onGetData(): number {
        return this.memory.dataView.getUint8(this.address);
    }
}

export const Byte = MotorUint8;