import { MotorRuntime } from "../../runtime";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorJump extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.jump;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        runtime.get('programCounter').js += this.js;
    }
}
MotorInstruction.instructions[MotorOperator.jump] = MotorJump;