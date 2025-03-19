import { AstStatement } from "./statement";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression";
import { AstBlock } from "./block";

export class AstIf extends AstStatement implements IAstBlock {
    readonly member: { [key: string]: any; } = {};
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock,
        readonly test: AstExpression,
        readonly falseBlock?: AstIf | AstBlock,
    ){
        super();
    }
}
