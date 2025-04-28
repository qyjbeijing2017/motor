import { MotorNumber } from "./number";

export class MotorF32 extends MotorNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getFloat32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setFloat32(this.address, value, true);
    }
}
