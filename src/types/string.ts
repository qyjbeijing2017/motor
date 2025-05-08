import { qzaPackageEnvironments } from "../package-environment";
import { QzaReference } from "./reference";

export class QzaString  extends QzaReference<string> {
    static readonly size = 8;
    get js(): string {
        return new TextDecoder().decode(this.memory.buffer.subarray(this.refAddress, this.refAddress + this.size));
    }
    set js(value: string) {
        this.size = value.length;
        this.memory.buffer.set(new TextEncoder().encode(value), this.refAddress);
    }
}
qzaPackageEnvironments["QzaString"] = QzaString;
