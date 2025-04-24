import { MotorRuntime } from "../../runtime";
import { MotorU64 } from "../../types/unsigned";
import { MotorFunctionFrame } from "../function-frame";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorCall extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.call;
    exec(runtime: MotorRuntime): void {
        const functionAddress = runtime.popStack(MotorU64);
        const programCounter = runtime.get('programCounter');
        const framePointer = runtime.get('framePointer');
        runtime.pushStack(MotorFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
        })
        framePointer.js = runtime.get('stackPointer').js;
        programCounter.js = functionAddress;
    }
}
MotorInstruction.instructions[MotorOperator.call] = MotorCall;
