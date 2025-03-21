import { MotorAst } from "../ast";
import { AstType } from "../type/type";

export abstract class AstDeclaration extends MotorAst {
    constructor(
        readonly type: AstType,
        readonly identifier: string,
    ) {
        super();
    }
}