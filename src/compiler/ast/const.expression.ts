import { AstExpression } from "./expression.statement";

export interface AstConst extends AstExpression {
    value: string
}