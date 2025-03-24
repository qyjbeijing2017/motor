import { motorSingleton } from "../../utils/singleton";
import { AstBlock } from "./block";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression/expression";
import { AstStatement } from "./statement";
import { AstBool } from "./type/bool";

export class AstIf extends AstStatement {
    constructor(
        readonly test: AstExpression,
        readonly trueBlock: AstBlock,
        readonly falseBlock?: AstBlock | AstIf,
        parent?: IAstBlock,
    ) {
        super(parent);
        if (test.type !== motorSingleton(AstBool)) {
            throw new Error('If statement test must be a boolean expression');
        }
    }
}