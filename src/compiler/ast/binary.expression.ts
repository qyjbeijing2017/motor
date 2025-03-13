import { AstExpression } from "./expression.statement";

export interface AstBinary extends AstExpression {
    astType: 'binary';
    left: AstExpression;
    right: AstExpression;
    operator: string;
}