import { AstExpression } from "./expression.statement";

export interface AstUnary extends AstExpression {
    right: AstExpression;
    operator: string;
}