import { Instance } from "../instance";
import { Memory } from "../memory";
import { Operator } from "./operator";
import { ILType } from "./type";

export abstract class Instruction extends Instance<{
    opcode: number;
    immediate?: number;
}> {
    static readonly map: Record<number, typeof Instruction> = {};
    readonly abstract type: ILType;
    readonly abstract operator: Operator;
    get immediate(): number | undefined {
        return undefined;
    }
    constructor(
        def?: {
            opcode: number;
            immediate?: number;
        },
        memory?: Memory,
        address?: number,
    ) {
        super(def, memory, address);
        
    }
}