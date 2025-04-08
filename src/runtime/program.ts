import { Array } from "../types/array"
import { Struct } from "../types/struct"
import { U32, U8 } from "../types/uint"

export class Program extends Struct<{
    length: U32
    buffer: Array<U8>
}> {
}