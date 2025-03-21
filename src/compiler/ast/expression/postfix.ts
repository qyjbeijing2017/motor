import { AstType } from "../type/type";
import { AstExpression } from "./expression";

export class AstPostFix extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly left: AstExpression,
        readonly operator: string,
    ) {
        super();
        this.type = left.type;
    }
}
