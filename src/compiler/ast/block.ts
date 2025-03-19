import { IAstBlock } from "./block.interface";
import { AstDeclaration } from "./declaration/declaration";
import { AstStatement } from "./statement";

export class AstBlock extends AstStatement implements IAstBlock {
    readonly member: {
        [key: string]: AstDeclaration;
    } = {};
    readonly statements: AstStatement[] = [];
    constructor(readonly parent: AstBlock | null = null) {
        super();
    }
}
