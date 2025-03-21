
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression/expression";
import { AstStatement } from "./statement";

export class AstReturn extends AstStatement {
    constructor(
        readonly expression: AstExpression | null = null,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}