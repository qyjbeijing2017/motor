import { AstExpression } from "./expression";

export interface AstTernary extends AstExpression {
    condition: AstExpression;
    true: AstExpression;
    false: AstExpression;
}