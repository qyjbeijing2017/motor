import { IAstBlock } from "./block.interface";
import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export class AstBlock extends AstStatement implements IAstBlock {
    types?: { [name: string]: AstType };
    members?: { [name: string]: AstType };
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}