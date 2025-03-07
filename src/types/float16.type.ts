import { MotorInstance } from "./instance";
import { getFloat16, setFloat16 } from "@petamoriken/float16";

export class MotorFloat16 extends MotorInstance<number> {
    static readonly size = 2;
    protected onSetData(val: number): void {
        setFloat16(this.memory.dataView, this.address, val, true);
    }
    protected onGetData(): number {
        return getFloat16(this.memory.dataView, this.address, true);
    }
}

export const MotorHalf = MotorFloat16;
