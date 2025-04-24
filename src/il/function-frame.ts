import { MotorStruct } from "../types/struct";
import { MotorU64 } from "../types/unsigned";

export class MotorFunctionFrame extends MotorStruct<{
    returnAddress: typeof MotorU64,
    framePointer: typeof MotorU64,
}> {
    static readonly size = MotorU64.size + MotorU64.size;
    get types() {
        return {
            returnAddress: MotorU64,
            framePointer: MotorU64,
        };
    }
}