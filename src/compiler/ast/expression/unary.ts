import { AstType } from "../type/type";
import { AstExpression } from "./expression";

export class AstUnary extends AstExpression {
    readonly type: AstType
    constructor(
        readonly operator: string,
        readonly right: AstExpression,
    ) {
        super();
        this.type = right.type;
    }
}