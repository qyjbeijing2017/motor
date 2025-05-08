import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaU32 extends QzaNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setUint32(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaU32'] = QzaU32;