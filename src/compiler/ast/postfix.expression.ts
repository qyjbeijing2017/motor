import { AstExpression } from "./expression.statement";

export interface AstPostFix extends AstExpression {
    base: AstExpression;
}