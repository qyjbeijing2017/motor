import { MotorRuntime } from "../../runtime";
import { MotorString } from "../../types/string";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorInvoke extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.invoke;
    }
    get js(): number | undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        const functionName = runtime.popStack(MotorString);
        if(!runtime.invokeMap.has(functionName)) {
            throw new Error(`Function ${functionName} not found in runtime`);
        }
        await runtime.invokeMap.get(functionName)!(runtime);
    }
}
MotorInstruction.instructions[MotorOperator.invoke] = MotorInvoke;
