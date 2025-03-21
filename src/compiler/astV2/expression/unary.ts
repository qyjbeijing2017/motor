import { AstType } from "../type/type";
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
}