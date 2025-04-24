import { MotorRuntime } from "../../runtime";
import { MotorFunctionFrame } from "../function-frame";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorReturn extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.call;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const framePointer = runtime.get('framePointer');
        const programCounter = runtime.get('programCounter');
        const stack = runtime.get('stack');
        const functionFrame = new MotorFunctionFrame(undefined, stack.memory, stack.address + framePointer.js);
        const returnAddress = functionFrame.get('returnAddress').js;
        const returnFramePointer = functionFrame.get('framePointer').js;
        stack.memory.buffer.copyWithin(
            stack.address + framePointer.js + 8, 
            stack.address + stackPointer.js, 
            stack.address + framePointer.js
        );
        stackPointer.js = framePointer.js + 8 - (stackPointer.js - framePointer.js);
        programCounter.js = returnAddress;
        framePointer.js = returnFramePointer;
    }
}