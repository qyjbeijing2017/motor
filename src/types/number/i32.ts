import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaI32 extends QzaNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setInt32(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaI32'] = QzaI32;