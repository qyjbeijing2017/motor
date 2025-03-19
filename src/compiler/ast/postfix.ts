import { AstExpression } from "./expression";
import { AstType } from "./declaration/type";

export type AstPostfixOperator = '++' | '--'

export class AstPostFix extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly operator: AstPostfixOperator,
        readonly expression: AstExpression,
    ) {
        super();
        this.type = expression.type;
    }
}