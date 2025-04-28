import { motorGetFloat8, motorSetFloat8 } from "../../utils/float8";
import { MotorNumber } from "./number";

export class MotorF8 extends MotorNumber {
    static readonly size = 1;
    get js(): number {
        return motorGetFloat8(this.memory.viewer, this.address);
    }
    set js(value: number) {
        motorSetFloat8(this.memory.viewer, this.address, value);
    }
}