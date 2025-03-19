import { AstExpression } from "./expression";
import { AstType } from "./declaration/type";

export type AstBinaryOperator = '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '<=' | '>' | '>=' | '&&' | '||' | '<<' | '>>' | '&' | '|' | '^' | '=';

export class AstBinary extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly operator: AstBinaryOperator,
        readonly left: AstExpression,
        readonly right: AstExpression
    ) {
        super();
        this.type = left.type;
    }
}
