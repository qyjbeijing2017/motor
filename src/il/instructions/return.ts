import { MotorRuntime } from "../../runtime";
import { MotorFunctionFrame } from "../function-frame";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorReturn extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.return;
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    get js(): number {
        this.memory.viewer.setUint16(this.address, this.code);
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
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
            stack.address + stackPointer.js + this.js
        );
        stackPointer.js = framePointer.js + 8 - this.js;
        programCounter.js = returnAddress;
        framePointer.js = returnFramePointer;
    }
}
MotorInstruction.instructions[MotorOperator.return] = MotorReturn;
