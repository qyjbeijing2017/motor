import { IAstBlock } from "./block.interface";
import { AstDeclaration } from "./declaration/declaration";
import { AstStatement } from "./statement";

export class AstBlock extends AstStatement implements IAstBlock {
    readonly member: {
        [key: string]: AstDeclaration;
    } = {};
    readonly statements: AstStatement[] = [];
    constructor(readonly parent: IAstBlock | null = null) {
        super();
    }

    toObject(): any {
        return {
            astType: 'block',
            member: Object.keys(this.member).reduce((acc, key) => {
                acc[key] = this.member[key].toObject();
                return acc;
            }, {} as { [key: string]: any; }),
            statements: this.statements.map((statement) => statement.toObject()),
        };
    }
}
