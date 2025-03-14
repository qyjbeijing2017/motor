import { AstExpression } from "./expression.statement";

export interface AstList extends AstExpression {
    astType: "list"
    elements: AstExpression[]
}