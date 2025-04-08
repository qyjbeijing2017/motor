import { Memory } from "../memory";
import type { Runtime } from "../runtime/runtime";
import { Instance } from "../instance";
import { OperatorCode } from "./operator-code";
import { TypeTag } from "./type-tag";

export abstract class Operation {
    constructor(
        protected _code: OperatorCode,
    ) { }
    get operator(): OperatorCode {
        return this._code & OperatorCode.OPERATOR_CODE;
    }
    get type(): TypeTag {
        return this._code & TypeTag.TYPE_CODE;
    }
    abstract get size(): number
    abstract parse(memory: Memory, address: number): number
    abstract write(memory: Memory, address: number): number
    abstract execute(runtime: Instance<Runtime>): void
}

