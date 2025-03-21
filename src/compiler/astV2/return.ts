import { AstExpression } from "../ast/expression";
import { IAstBlock } from "./block.interface";
import { AstStatement } from "./statement";

export class AstReturn extends AstStatement {
    constructor(
        readonly expression: AstExpression | null = null,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}