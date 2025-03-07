import { getFloat8, setFloat8 } from "../utils/float8";
import { MotorInstance } from "./instance";

export class MotorFloat8 extends MotorInstance<number> {
    static readonly size = 1;
    protected onSetData(val: number): void {
        setFloat8(this.memory.dataView, this.address, val);
    }
    protected onGetData(): number {
        return getFloat8(this.memory.dataView, this.address);
    }
}
