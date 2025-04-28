import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { MotorNumber } from "./number";

export class MotorF16 extends MotorNumber {
    static readonly size = 2;
    get js(): number {
        return getFloat16(this.memory.viewer, this.address, true);
    }
    set js(value: number) {
        setFloat16(this.memory.viewer, this.address, value, true);
    }
}
