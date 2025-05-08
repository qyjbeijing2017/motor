import { QzaInstance } from "../instance";
import { qzaPackageEnvironments } from "../package-environment";

export class QzaNull extends QzaInstance<null> {
    static readonly size = 0;
    get js(): null {
        return null;
    }
    protected onInstanceCreated(): void {
        (this.address as any) = 0;
    }
}
qzaPackageEnvironments["QzaNull"] = QzaNull;