import { AstExpression } from "./expression.statement";
import { AstStatement } from "./statement";

export interface AstThrow extends AstStatement {
    astType: 'throw';
    expression: AstExpression;
}