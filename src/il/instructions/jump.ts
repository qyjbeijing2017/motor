import { QzaRuntime } from "../../runtime";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";

export class QzaJump extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.jump;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.get('programCounter').js += this.js;
    }
}
QzaInstruction.instructions[QzaOperator.jump] = QzaJump;
