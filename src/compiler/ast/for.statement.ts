import { AstBlock } from "./block";
import { AstExpression } from "./expression.statement";

export interface AstFor extends AstBlock {
    astType: 'for';
    iterable: AstExpression;
}