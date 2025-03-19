import { AstExpression } from "./expression";

export type AstUnaryOperator = '!' | '-' | '~';

export class AstUnary extends AstExpression {
    constructor(
        readonly operator: AstUnaryOperator,
        readonly expression: AstExpression,
    ) {
        super();
    }
}