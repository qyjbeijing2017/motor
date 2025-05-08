import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaF32 extends QzaNumber {
    static readonly size = 4;
    get js(): number {
        return this.memory.viewer.getFloat32(this.address, true);
    }
    set js(value: number) {
        this.memory.viewer.setFloat32(this.address, value, true);
    }
}
qzaPackageEnvironments['QzaF32'] = QzaF32;
