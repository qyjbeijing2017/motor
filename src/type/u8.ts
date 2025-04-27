import { MotorInstance } from "../instance";

export class MotorU8 extends MotorInstance<number> {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getUint8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address, value);
    }
}