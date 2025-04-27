import { MotorInstance } from "../instance";

export class MotorU32 extends MotorInstance<number> {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint32(this.address, value, true);
    }
}