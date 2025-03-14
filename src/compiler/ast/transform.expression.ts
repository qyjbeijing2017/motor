import { AstExpression } from "./expression.statement";

export interface AstTransform extends AstExpression {
    astType: 'transform';
    expression: AstExpression;
}