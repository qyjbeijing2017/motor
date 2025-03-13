import { AstExpression } from "./expression.statement";

export interface AstTernary extends AstExpression {
    astType: 'ternary';
    condition: AstExpression;
    true: AstExpression;
    false: AstExpression;
}