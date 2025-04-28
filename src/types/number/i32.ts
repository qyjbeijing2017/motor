import { MotorNumber } from "./number";

export class MotorI32 extends MotorNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt32(this.address, value, true);
    }
}