import { AstExpression } from "./expression";

export class AstTernary extends AstExpression {
    constructor(
        readonly test: AstExpression,
        readonly trueExpression: AstExpression,
        readonly falseExpression: AstExpression,
    ) {
        super();
    }
}
