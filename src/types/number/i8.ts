import { motorPackageEnvironments } from "../../package-environment";
import { MotorNumber } from "./number";

export class MotorI8 extends MotorNumber {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getInt8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setInt8(this.address, value);
    }
}
motorPackageEnvironments['MotorI8'] = MotorI8;