import { AstExpression } from "./expression.statement";

export interface AstVariable extends AstExpression {
    astType: 'variable';
    identifier: string
    ref?: boolean
}