import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaU64 extends QzaNumber {
    static readonly size = 8;
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(Math.trunc(value)), true);
    }
}
qzaPackageEnvironments['QzaU64'] = QzaU64;
