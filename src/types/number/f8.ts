import { qzaPackageEnvironments } from "../../package-environment";
import { qzaGetFloat8, qzaSetFloat8 } from "../../utils/float8";
import { QzaNumber } from "./number";

export class QzaF8 extends QzaNumber {
    static readonly size = 1;
    get js(): number {
        return qzaGetFloat8(this.memory.viewer, this.address);
    }
    set js(value: number) {
        qzaSetFloat8(this.memory.viewer, this.address, value);
    }
}
qzaPackageEnvironments['QzaF8'] = QzaF8;