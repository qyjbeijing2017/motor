import { MotorNumber } from "./number";

export class MotorU16 extends MotorNumber {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint16(this.address, value, true);
    }
}