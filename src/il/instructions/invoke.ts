import { QzaRuntime } from "../../runtime";
import { QzaString } from "../../types/string";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";

export class QzaInvoke extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.invoke;
    }
    get js(): number | undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const functionName = runtime.popStack(QzaString);
        if(!runtime.invokeMap.has(functionName)) {
            throw new Error(`Function ${functionName} not found in runtime`);
        }
        await runtime.invokeMap.get(functionName)!(runtime);
    }
}
QzaInstruction.instructions[QzaOperator.invoke] = QzaInvoke;
