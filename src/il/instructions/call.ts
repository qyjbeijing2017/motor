import { QzaRuntime } from "../../runtime";
import { QzaU64 } from "../../types/number/u64";
import { QzaFunctionFrame } from "../function-frame";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";

export class QzaCall extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.call;
    }
    get js(): number | undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const functionAddress = runtime.popStack(QzaU64);
        const programCounter = runtime.get('programCounter');
        const framePointer = runtime.get('framePointer');
        runtime.pushStack(QzaFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
        })
        framePointer.js = runtime.get('stackPointer').js;
        programCounter.js = functionAddress;
    }
}
QzaInstruction.instructions[QzaOperator.call] = QzaCall;
