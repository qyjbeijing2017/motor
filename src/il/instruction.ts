import { OperatorCode } from "./operator-code";
import { TypeTag } from "./type";

export interface Instruction {
    operator: OperatorCode
    type?: TypeTag
    operand?: number
}
