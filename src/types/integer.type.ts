import { MotorInstance } from "./instance";

export class MotorInteger extends MotorInstance<number> {
    static readonly size = 4;
    protected onSetData(val: number): void {
        this.memory.dataView.setInt32(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getInt32(this.address, true);
    }
}

export const MotorInt32 = MotorInteger;