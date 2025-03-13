import { AstExpression } from "./expression.statement";

export interface AstTernary extends AstExpression {
    condition: AstExpression;
    true: AstExpression;
    false: AstExpression;
}