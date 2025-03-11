import { MotorInstruction, MotorInstructionType } from "../runtime/instruction";

export interface MotorIntermediate {
    instruction: MotorInstruction;
    type?: MotorInstructionType;
    operand?: number;
}