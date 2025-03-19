import { AstType } from "./declaration/type";
import { AstExpression } from "./expression";

export class AstTernary extends AstExpression {
    readonly type: AstType
    constructor(
        readonly test: AstExpression,
        readonly trueExpression: AstExpression,
        readonly falseExpression: AstExpression,
    ) {
        super();
        this.type = trueExpression.type;
    }
}
