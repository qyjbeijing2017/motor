import { OperatorCode } from "./operator-code";
import { TypeTag } from "./type-tag";

export interface Instruction {
    operator: OperatorCode
    type?: TypeTag
    operand?: number
}
