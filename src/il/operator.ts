import { Instruction } from "./instruction";

export abstract class Operator {
    abstract length(instruction: Instruction): number;
}