import { IAstBlock } from "./block.interface";
import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export class AstBlock extends AstStatement implements IAstBlock {
    readonly types?: { [name: string]: AstType } = {};
    readonly members?: { [name: string]: AstType } = {};
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}