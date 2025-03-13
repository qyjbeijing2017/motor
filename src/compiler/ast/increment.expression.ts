import { AstExpression } from "./expression.statement";

export interface AstIncrement extends AstExpression {
    left: AstExpression;
    operator: string;
}