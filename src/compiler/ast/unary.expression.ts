import { AstExpression } from "./expression.statement";

export interface AstUnary extends AstExpression {
    astType: 'unary';
    right: AstExpression;
    operator: string;
}