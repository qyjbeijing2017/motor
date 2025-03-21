import { AstStatement } from "../statement";
import { AstType } from "../type/type";

export abstract class AstExpression extends AstStatement {
    readonly abstract type: AstType;
}
