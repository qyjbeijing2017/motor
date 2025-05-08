import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaU8 extends QzaNumber {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getUint8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address, value);
    }
}
qzaPackageEnvironments['QzaU8'] = QzaU8;