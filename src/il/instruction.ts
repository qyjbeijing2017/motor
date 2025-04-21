import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorInstance<number | undefined> {
    static readonly instructions: { [key: string]: MotorType } = {};
    abstract readonly code: number;
    get operator(): number {
        return this.code & MotorOperator.operator_mask;
    }
    get ILType(): number {
        return this.code & MotorILType.type_mask;
    }
    get js(): number | undefined {
        return undefined;
    }
    set js(value: number | undefined) {
        this.memory.viewer.setUint16(this.address, this.code);
        this.setImmediate(value);
    }
    protected setImmediate(value?: number): void {
        // TODO: Implement this method
    }

    static readInstruction(memory: MotorMemory, address: number): MotorInstruction {
        const code = memory.viewer.getUint16(address);
        const instructionClass = this.instructions[code];
        if (!instructionClass) {
            throw new Error(`Unknown instruction code: ${code}`);
        }
        return new instructionClass(undefined, memory, address);
    }
}

export type MotorType = {
    readonly size: number;
    new (def?: number, memory?: MotorMemory, address?: number): MotorInstruction;
}