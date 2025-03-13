import { AstExpression } from "./expression.statement";
import { AstPostFix } from "./postfix.expression";

export interface AstCall extends AstPostFix {
    astType: 'call';
    params: AstExpression[];
}