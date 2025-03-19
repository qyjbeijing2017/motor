import { AstDeclaration } from "./declaration";
import { AstStatement } from "./statement";

export class AstBlock extends AstStatement {
    readonly declarations: {
        [key: string]: AstDeclaration;
    } = {};
    readonly statements: AstStatement[] = [];
    constructor(readonly parent: AstBlock | null = null) {
        super();
    }
}
