import { AstExpression } from "./expression.statement";
import { AstList } from "./list.expression";
import { AstType } from "./type";

export interface AstConst extends AstExpression {
    astType: 'const'
    value: string | number | boolean | AstList
    type: AstType
}