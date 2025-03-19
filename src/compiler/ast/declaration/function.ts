import { IAstBlock } from "../block.interface";
import { AstStatement } from "../statement";
import { AstDeclaration } from "./declaration";
import { AstType } from "./type";
import { AstVariable } from "./variable";

export class AstFunction extends AstDeclaration implements IAstBlock {
    readonly member: {
        [key: string]: AstDeclaration;
    } = {};

    readonly statements: AstStatement[] = [];
    readonly params: AstVariable[] = [];

    constructor(
        readonly parent: IAstBlock | null,
        readonly identifier: string,
        readonly type: AstType,
    ) {
        super();
    }

    toObject() {
        return {
            astType: 'function',
            type: this.type.toObject(),
            identifier: this.identifier,
            params: this.params.map(p => p.toObject()),
            member: Object.keys(this.member).reduce((acc, key) => {
                acc[key] = this.member[key].toObject();
                return acc;
            }, {} as { [key: string]: any; }),
            statements: this.statements.map(s => s.toObject()),
        };
    }
}
