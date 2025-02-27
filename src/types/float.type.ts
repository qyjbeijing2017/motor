import { MotorInstance } from "./instance";

export class MotorFloat extends MotorInstance<number> {
    static readonly size = 4;
    protected onSetData(val: number): void {
        this.memory.dataView.setFloat32(this.address, val);
    }
    protected onGetData(): number {
        return this.memory.dataView.getFloat32(this.address);
    }
}

export const MotorFloat32 = MotorFloat;