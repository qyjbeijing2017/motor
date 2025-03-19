import { AstStatement } from "./statement";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression";

export class AstWhile extends AstStatement implements IAstBlock {
    readonly member: { [key: string]: any; } = {};
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock,
        readonly test: AstExpression,
    ){
        super();
    }
}
