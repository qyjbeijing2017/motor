import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { QzaNumber } from "./number";
import { qzaPackageEnvironments } from "../../package-environment";

export class QzaF16 extends QzaNumber {
    static readonly size = 2;
    get js(): number {
        return getFloat16(this.memory.viewer, this.address, true);
    }
    set js(value: number) {
        setFloat16(this.memory.viewer, this.address, value, true);
    }
}
qzaPackageEnvironments['QzaF16'] = QzaF16;
