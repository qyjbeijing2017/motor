import { MotorInstance } from "../types/instance";


export class MotorRuntime extends MotorInstance<number> {
    static size = 1024 * 4;
    protected onSetData(val: number): void {
        if(val > MotorRuntime.size) {
            throw new Error(`MotorRuntime: stack overflow`);
        }
        this.memory.dataView.setUint32(this.address, val, true);
    }
    protected onGetData(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
}