import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaF64 extends QzaNumber {
    static readonly size = 8;
    get js(): number {
        return this.memory.viewer.getFloat64(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setFloat64(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaF64'] = QzaF64;
