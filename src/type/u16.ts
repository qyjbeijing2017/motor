import { MotorInstance } from "../instance";

export class MotorU16 extends MotorInstance<number> {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint16(this.address, value, true);
    }
}