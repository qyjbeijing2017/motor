import { QzaRuntime } from "../../runtime";
import { QzaFunctionFrame } from "../function-frame";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";

export class QzaReturn extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.return;
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    get js(): number {
        this.memory.viewer.setUint16(this.address, this.code);
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const stackPointer = runtime.get('stackPointer');
        const framePointer = runtime.get('framePointer');
        const programCounter = runtime.get('programCounter');
        const stack = runtime.get('stack');
        const functionFrame = new QzaFunctionFrame(undefined, stack.memory, stack.address + framePointer.js);
        const returnAddress = functionFrame.get('returnAddress').js;
        const returnFramePointer = functionFrame.get('framePointer').js;
        stack.memory.buffer.copyWithin(
            stack.address + framePointer.js + QzaFunctionFrame.size - this.js, 
            stack.address + stackPointer.js, 
            stack.address + stackPointer.js + this.js
        );
        stackPointer.js = framePointer.js + QzaFunctionFrame.size - this.js;
        programCounter.js = returnAddress;
        framePointer.js = returnFramePointer;
    }
}
QzaInstruction.instructions[QzaOperator.return] = QzaReturn;
