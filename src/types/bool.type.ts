import { MotorInstance } from "./instance";

export class MotorBool extends MotorInstance<boolean> {
    static readonly size = 1;
    protected onSetData(val: boolean): void {
        this.memory.dataView.setUint8(this.address, val ? 1 : 0);
    }
    protected onGetData(): boolean {
        return this.memory.dataView.getUint8(this.address) === 1;
    }
}

export const MotorBoolean = MotorBool;
