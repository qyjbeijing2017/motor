import { MotorInstance } from "./instance";

export class MotorInt16 extends MotorInstance<number> {
    static readonly size = 2;
    protected onSetData(val: number): void {
        this.memory.dataView.setInt16(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getInt16(this.address, true);
    }
}

export const MotorShort = MotorInt16;