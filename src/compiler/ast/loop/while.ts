import { motorSingleton } from "../../../utils/singleton";
import { AstBlock } from "../block";
import { IAstBlock } from "../block.interface";
import { AstExpression } from "../expression/expression";
import { AstBool } from "../type/bool";
import { AstLoop } from "./loop";

export class AstWhile extends AstLoop {
    constructor(
        readonly test: AstExpression,
        readonly block: AstBlock,
        parent: IAstBlock | null = null,
    ) {
        super(parent);
        if (test.type !== motorSingleton(AstBool)) {
            throw new Error('While statement test must be a boolean expression');
        }
    }
}