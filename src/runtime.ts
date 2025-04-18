import { MotorStruct, MotorStructMemberType } from "./types/struct";
import { MotorU16, MotorU64 } from "./types/unsigned";

export class MotorRuntime extends MotorStruct<{
    id: typeof MotorU16,
    programPointer: typeof MotorU64,
    stackPointer: typeof MotorU64,
}> {
    static readonly size = 8 + 8;
    get types(): MotorStructMemberType {
        return {
            programPointer: MotorU64,
            stackPointer: MotorU64,
        };
    }
}