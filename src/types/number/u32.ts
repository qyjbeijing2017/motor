import { motorPackageEnvironments } from "../../package-environment";
import { MotorNumber } from "./number";

export class MotorU32 extends MotorNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint32(this.address, value, true);
    }
}
motorPackageEnvironments['MotorU32'] = MotorU32;