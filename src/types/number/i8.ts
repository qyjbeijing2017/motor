import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaI8 extends QzaNumber {
    static readonly size = 1;
    get js(): number {
        return this.memory.viewer.getInt8(this.address);
    }
    set js(value: number) {
        this.memory.viewer.setInt8(this.address, value);
    }
}
qzaPackageEnvironments['QzaI8'] = QzaI8;