import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaU16 extends QzaNumber {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint16(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaU16'] = QzaU16;