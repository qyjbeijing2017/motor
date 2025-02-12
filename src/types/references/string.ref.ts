import { MotorTypeOf } from "../../utils/type-of";
import { MotorChar } from "../char.type";
import { MotorPointer } from "../pointer.type";
import { MotorStruct } from "../struct.type";
import { MotorUnsignedInteger } from "../unsigned-integer.type";

export class MotorString extends MotorStruct<{
    length: MotorTypeOf<MotorUnsignedInteger>,
    data: MotorTypeOf<MotorPointer<MotorChar>>
}> {

    
}