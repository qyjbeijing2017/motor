import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorRuntime } from "../runtime";
import { motorSingleton } from "../utils/singleton";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorInstance<number | undefined> {
    static readonly instructions: { [key: number]: MotorInstructionType } = {};
    abstract get code(): number;
    get operator(): number {
        return this.code & MotorOperator.mask;
    }
    get ILType(): number {
        return this.code & MotorILType.mask;
    }
    protected onInstanceCreated(): void {
        this.memory.viewer.setUint16(this.address, this.code);
    }

    static readInstruction(address: number, memory: MotorMemory = motorSingleton(MotorMemory)): MotorInstruction {
        const code = memory.viewer.getUint16(address);
        const instructionClass = this.instructions[code];
        if (!instructionClass) {
            throw new Error(`Unknown instruction code: ${code}`);
        }
        return new instructionClass(undefined, memory, address);
    }
    abstract exec(runtime: MotorRuntime): Promise<void>;
}

export type MotorInstructionType = {
    readonly size: number;
    new(def?: number, memory?: MotorMemory, address?: number): MotorInstruction;
}
