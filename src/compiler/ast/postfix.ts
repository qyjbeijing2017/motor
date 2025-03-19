import { AstExpression } from "./expression";

export type AstPostfixOperator = '++' | '--'

export class AstPostFix extends AstExpression {
    constructor(
        readonly operator: AstPostfixOperator,
        readonly expression: AstExpression,
    ) {
        super();
    }
}