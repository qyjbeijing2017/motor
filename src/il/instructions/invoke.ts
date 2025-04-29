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
    }
}
MotorInstruction.instructions[MotorOperator.invoke] = MotorInvoke;
