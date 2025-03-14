import { AstBlock } from "./block";
import { AstExpression } from "./expression.statement";

export interface AstBranch extends AstBlock {
    astType: 'branch';
    test: AstExpression;
    false?: AstBlock;
}