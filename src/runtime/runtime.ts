import { F32 } from "../types/float";
import { Struct } from "../types/struct";
import { Program } from "./program";

export class Runtime extends Struct<{
    pc: F32
    sp: F32
    bp: F32
    program: Program
}> {
    
}