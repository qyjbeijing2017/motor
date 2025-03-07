import { MotorInstance } from "./instance";

export class MotorInt8 extends MotorInstance<number> {
    static readonly size = 1;
    protected onSetData(val: number): void {
        this.memory.dataView.setInt8(this.address, val);
    }
    protected onGetData(): number {
        return this.memory.dataView.getInt8(this.address);
    }
}
