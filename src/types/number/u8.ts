import { motorPackageEnvironments } from "../../package-environment";
import { MotorNumber } from "./number";

export class MotorU8 extends MotorNumber {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getUint8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address, value);
    }
}
motorPackageEnvironments['MotorU8'] = MotorU8;