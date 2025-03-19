import { AstExpression } from "./expression";

export class AstCall extends AstExpression {
    readonly args: AstExpression[] = [];
    constructor() {
        super();
    }
}