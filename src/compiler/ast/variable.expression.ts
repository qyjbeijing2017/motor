import { AstExpression } from "./expression.statement";

export interface AstVariable extends AstExpression {
    identifier: string
}