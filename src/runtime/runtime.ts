import { Instance } from "../instance";
import { F32 } from "../types/float";
import { Struct } from "../types/struct";
import { singleton } from "../utils/singleton";

export const runtimeFields = {
    pc: singleton(F32),
    sp: singleton(F32),
    bp: singleton(F32),
}

export const runtimeStruct = new Struct(runtimeFields);

export class Runtime extends Instance<Struct<{
    pc: F32
    sp: F32
    bp: F32
}>> {
    constructor() {
        super(runtimeStruct, {
            pc: 0,
            sp: 0,
            bp: 0,
        });
    }
}