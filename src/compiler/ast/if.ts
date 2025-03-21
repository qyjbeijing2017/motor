import { AstBlock } from "./block";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression/expression";
import { AstStatement } from "./statement";

export class AstIf extends AstStatement {
    constructor(
        readonly test: AstExpression,
        readonly trueBlock: AstBlock,
        readonly falseBlock?: AstBlock | AstIf,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}