import { AstType } from "./declaration/type";
import { AstExpression } from "./expression";

export type AstUnaryOperator = '!' | '-' | '~';

export class AstUnary extends AstExpression {
    readonly type: AstType
    constructor(
        readonly operator: AstUnaryOperator,
        readonly expression: AstExpression,
    ) {
        super();
        this.type = expression.type;
    }

    toObject() {
        return {
            astType: 'unary',
            operator: this.operator,
            expression: this.expression.toObject(),
            type: this.type.toObject(),
        };
    }
}