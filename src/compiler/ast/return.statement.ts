import { AstExpression } from "./expression.statement";
import { AstStatement } from "./statement";

export interface AstReturn extends AstStatement {
    astType: 'return';
    expression?: AstExpression;
}