import { MotorRuntime } from "../../runtime";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";

export class MotorCall extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.call;
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
    setImmediate(value: number = 0): void {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        
    }
}
MotorInstruction.instructions[MotorOperator.call] = MotorCall;
