import { motorPackageEnvironments } from "../../package-environment";
import { MotorNumber } from "./number";

export class MotorI16 extends MotorNumber {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt16(this.address, value, true);
    }
}
motorPackageEnvironments['MotorI16'] = MotorI16;