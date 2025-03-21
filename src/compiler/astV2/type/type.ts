import { MotorAst } from "../ast";

export abstract class AstType extends MotorAst {
    abstract readonly size: number;
}