import { AstWhile } from "./while";
import { AstStatement } from "./statement";
import { AstFunction } from "./declaration/function";
import { AstExpression } from "./expression";

export class AstReturn extends AstStatement {
    constructor(
        readonly fn: AstFunction,
        readonly expression: AstExpression,
    ) {
        super();
    }

    toObject() {
        return {
            astType: 'return',
            expression: this.expression.toObject(),
        }
    }
}