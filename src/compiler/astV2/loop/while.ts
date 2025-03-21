import { AstBlock } from "../block";
import { IAstBlock } from "../block.interface";
import { AstExpression } from "../expression/expression";
import { AstLoop } from "./loop";

export class AstWhile extends AstLoop {
    constructor(
        readonly test: AstExpression,
        readonly block: AstBlock,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}