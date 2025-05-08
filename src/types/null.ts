import { MotorInstance } from "../instance";
import { motorPackageEnvironments } from "../package-environment";

export class MotorNull extends MotorInstance<null> {
    static readonly size = 0;
    get js(): null {
        return null;
    }
    protected onInstanceCreated(): void {
        (this.address as any) = 0;
    }
}
motorPackageEnvironments["MotorNull"] = MotorNull;