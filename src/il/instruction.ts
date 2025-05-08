import { QzaInstance } from "../instance";
import { QzaMemory } from "../memory";
import { QzaRuntime } from "../runtime";
import { qzaSingleton } from "../utils/singleton";
import { QzaOperator } from "./operator";
import { QzaILType } from "./type";

export abstract class QzaInstruction extends QzaInstance<number | undefined> {
    static readonly instructions: { [key: number]: QzaInstructionType } = {};
    abstract get code(): number;
    get operator(): number {
        return this.code & QzaOperator.mask;
    }
    get ILType(): number {
        return this.code & QzaILType.mask;
    }
    protected onInstanceCreated(): void {
        this.memory.viewer.setUint16(this.address, this.code);
    }

    static readInstruction(address: number, memory: QzaMemory = qzaSingleton(QzaMemory)): QzaInstruction {
        const code = memory.viewer.getUint16(address);
        const instructionClass = this.instructions[code];
        if (!instructionClass) {
            throw new Error(`Unknown instruction code: ${code}`);
        }
        return new instructionClass(undefined, memory, address);
    }
    abstract exec(runtime: QzaRuntime): Promise<void>;
}

export type QzaInstructionType = {
    readonly size: number;
    new(def?: number, memory?: QzaMemory, address?: number): QzaInstruction;
}
