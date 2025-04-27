import { MotorInstance } from "../instance";

export class MotorI32 extends MotorInstance<number> {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt32(this.address, value, true);
    }
}