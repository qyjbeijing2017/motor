import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorPushU8 extends MotorInstruction {
    code: number = MotorOperator.push | MotorILType.U8;
}
