import { IAstBlock } from "../block.interface";
import { AstStatement } from "../statement";
import { AstDeclaration } from "./declaration";
import { AstType } from "./type";

export class AstFunction extends AstDeclaration implements IAstBlock {
    readonly member: {
        [key: string]: AstDeclaration;
    } = {};

    readonly statements: AstStatement[] = [];

    constructor(
        readonly parent: IAstBlock | null,
        readonly identifier: string,
        readonly type: AstType,
    ) {
        super();
    }
}
