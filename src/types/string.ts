import { MotorArray } from "./array";
import { Char } from "./char";
import { F32 } from "./float";
import { Pointer } from "./pointer";
import { Struct } from "./struct";

export class MotorString extends Struct<{
    length: F32
    data: Pointer<MotorArray<Char>>
}> {

}