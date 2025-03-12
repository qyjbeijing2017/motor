import { AstExpression } from "./expression";

export interface AstBinary extends AstExpression {
    left: AstExpression;
    right: AstExpression;
    operator: string;
}