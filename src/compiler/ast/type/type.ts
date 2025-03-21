import { MotorAst } from "../ast";

export abstract class AstType extends MotorAst {
    abstract onGetSize(): number
    get size(): number {
        return this.onGetSize();
    }
}