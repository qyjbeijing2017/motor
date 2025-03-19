import { AstExpression } from "./expression";

export type AstBinaryOperator = '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '<=' | '>' | '>=' | '&&' | '||';

export class AstBinary extends AstExpression {
    constructor(
        readonly operator: AstBinaryOperator,
        readonly left: AstExpression,
        readonly right: AstExpression
    ) {
        super();
    }
}
