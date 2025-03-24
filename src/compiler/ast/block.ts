import { IAstBlock } from "./block.interface";
import { AstDeclaration } from "./expression/declaration";
import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export class AstBlock extends AstStatement implements IAstBlock {
    types?: { [name: string]: AstType };
    members?: { [name: string]: AstDeclaration };
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}