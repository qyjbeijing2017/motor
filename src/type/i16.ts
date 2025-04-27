import { MotorInstance } from "../instance";

export class MotorI16 extends MotorInstance<number> {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt16(this.address, value, true);
    }
}