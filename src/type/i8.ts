import { MotorInstance } from "../instance";

export class MotorI8 extends MotorInstance<number> {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getInt8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setInt8(this.address, value);
    }
}