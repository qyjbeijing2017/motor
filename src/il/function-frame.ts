import { MotorStruct } from "../types/struct";
import { MotorU64 } from "../types/number/u64";

export class MotorFunctionFrame extends MotorStruct<{
    returnAddress: typeof MotorU64,
    framePointer: typeof MotorU64,
    packagePointer: typeof MotorU64,
}> {
    static readonly size = MotorU64.size + MotorU64.size;
    get type() {
        return {
            returnAddress: MotorU64,
            framePointer: MotorU64,
            packagePointer: MotorU64,
        };
    }
}