import { MotorAst } from "../ast";

export abstract class AstType extends MotorAst {
    abstract readonly size: number;
    abstract readonly name: string;
    readonly members?: { [name: string]: AstType };
}