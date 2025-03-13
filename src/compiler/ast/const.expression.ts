import { AstExpression } from "./expression.statement";

export interface AstConst extends AstExpression {
    astType: 'const';
    value: string
}