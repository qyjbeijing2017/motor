import { AstExpression } from "./expression.statement";

export interface AstBinary extends AstExpression {
    left: AstExpression;
    right: AstExpression;
    operator: string;
}