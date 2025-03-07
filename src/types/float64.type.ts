import { MotorInstance } from "./instance";

export class MotorFloat64 extends MotorInstance<number> {
    static readonly size = 8;
    protected onSetData(val: number): void {
        this.memory.dataView.setFloat64(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getFloat64(this.address, true);
    }
}

export const MotorDouble = MotorFloat64;
