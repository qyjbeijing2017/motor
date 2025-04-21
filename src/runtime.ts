import { MotorStack } from "./stack";
import { MotorStruct, MotorStructMemberType } from "./types/struct";
import { MotorU16, MotorU64 } from "./types/unsigned";

export class MotorRuntime extends MotorStruct<{
    id: typeof MotorU16,
    programPointer: typeof MotorU64,
    stackPointer: typeof MotorU64,
    stack: typeof MotorStack,
}> {
    static readonly size =
        MotorU16.size +
        MotorU64.size +
        MotorU64.size +
        MotorStack.size;
    get types(): MotorStructMemberType {
        return {
            id: MotorU16,
            programPointer: MotorU64,
            stackPointer: MotorU64,
            stack: MotorStack,
        };
    }
}