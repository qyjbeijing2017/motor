import { MotorArray } from "../types/array"
import { Struct } from "../types/struct"
import { U32, U8 } from "../types/uint"
import { singleton } from "../utils/singleton";

export const programFields = {
    length: singleton(U32),
}

export const programStruct = new Struct(programFields);

export class Program extends Struct<{
    length: U32
    buffer: MotorArray<U8>
}> {
    
}