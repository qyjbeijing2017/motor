import { IAstBlock } from "../block.interface";
import { AstType } from "../type/type";
import { AstExpression } from "./expression";

export class AstBinary extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly left: AstExpression,
        readonly right: AstExpression,
        readonly operator: string,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
        if (left.type !== right.type) {
            throw new Error("Binary expression must have same type on both sides");
        }
        this.type = left.type;
    }
}
