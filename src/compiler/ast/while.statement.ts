import { AstBlock } from "./block";
import { AstExpression } from "./expression.statement";

export interface AstWhile extends AstBlock {
    astType: 'while';
    test: AstExpression;
}