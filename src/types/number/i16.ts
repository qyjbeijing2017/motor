import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaI16 extends QzaNumber {
    static readonly size = 2;
    get js(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt16(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaI16'] = QzaI16;