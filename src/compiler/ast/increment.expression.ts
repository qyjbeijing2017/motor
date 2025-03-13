import { AstExpression } from "./expression.statement";

export interface AstIncrement extends AstExpression {
    astType: 'increment';
    left: AstExpression;
    operator: string;
}