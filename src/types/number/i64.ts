import { qzaPackageEnvironments } from "../../package-environment";
import { QzaNumber } from "./number";

export class QzaI64 extends QzaNumber {
    static readonly size = 8;
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address, BigInt(Math.trunc(value)), true);
    }
}
qzaPackageEnvironments['QzaI64'] = QzaI64;