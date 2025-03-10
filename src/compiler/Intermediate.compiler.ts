import { MotorInstruction } from "../runtime/instruction";

export interface MotorIntermediate {
    instruction: MotorInstruction;
    operand: number;
}