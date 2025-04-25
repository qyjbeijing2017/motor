import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorRuntime } from "../runtime";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorInstance<number | undefined> {
    static readonly instructions: { [key: string]: MotorInstructionType } = {};
    abstract get code(): number;
    get operator(): number {
        return this.code & MotorOperator.operator_mask;
    }
    get ILType(): number {
        return this.code & MotorILType.type_mask;
    }
    protected onInstanceCreated(): void {
        this.memory.viewer.setUint16(this.address, this.code);
    }
    static readInstruction(memory: MotorMemory, address: number): MotorInstruction {
        const code = memory.viewer.getUint16(address);
        const instructionClass = this.instructions[code];
        if (!instructionClass) {
            throw new Error(`Unknown instruction code: ${code}`);
        }
        return new instructionClass(undefined, memory, address);
    }
    abstract exec(runtime: MotorRuntime): void;
}

export type MotorInstructionType = {
    readonly size: number;
    new(def?: number, memory?: MotorMemory, address?: number): MotorInstruction;
}