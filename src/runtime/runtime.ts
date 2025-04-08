import { Struct } from "../types/struct";
import { U32 } from "../types/uint";
import { singleton } from "../utils/singleton";
import { Program } from "./program";
import { Stack } from "./stack";

const fields = {
    rpc: singleton(U32),
    rsp: singleton(U32),
    lr: singleton(U32),
    program: singleton(Program),
    stack: singleton(Stack)
}

export class Runtime extends Struct<{
    rpc: U32, // program counter register
    rsp: U32, // stack pointer register
    lr: U32, // link register
    program: Program
    stack: Stack
}> {
    constructor() {
        super(fields);
    }
}