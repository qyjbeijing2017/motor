import { MotorNumber } from "./number";

export class MotorF64 extends MotorNumber {
    static readonly size = 8;
    get js(): number {
        return this.memory.viewer.getFloat64(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setFloat64(this.address, value, true);
    }
}
