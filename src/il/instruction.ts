import { MotorType } from "../type";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorType<number | undefined> {
    static readonly types: { [key: number]: MotorInstruction } = {}
    get type(): MotorILType {
        return this.code & MotorILType.type
    }
    get operator(): MotorOperator {
        return this.code & MotorOperator.operator
    }
    constructor(readonly code: number) {
        super();
    }
}