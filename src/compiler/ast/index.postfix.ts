import { AstExpression } from "./expression.statement";
import { AstPostFix } from "./postfix.expression";

export interface AstIndex extends AstPostFix {
    index: AstExpression;
}