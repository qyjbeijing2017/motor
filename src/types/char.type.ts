import { MotorInstance } from "./instance";

export class MotorChar extends MotorInstance<string> {
    static readonly size = 1;
    protected onSetData(val: string): void {
        this.memory.dataView.setUint8(this.address, val.charCodeAt(0));
    }
    protected onGetData(): string {
        return String.fromCharCode(this.memory.dataView.getUint8(this.address));
    }
}
