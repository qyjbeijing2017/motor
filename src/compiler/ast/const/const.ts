import { AstExpression } from "../expression";

export abstract class AstConst extends AstExpression {
    constructor(readonly raw: string) {
        super();
    }
}
