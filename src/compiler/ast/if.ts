import { AstStatement } from "./statement";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression";
import { AstBlock } from "./block";
import { AstDeclaration } from "./declaration/declaration";

export class AstIf extends AstStatement implements IAstBlock {
    readonly member: { [key: string]: AstDeclaration; } = {};
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock,
        readonly test: AstExpression,
        readonly falseBlock?: AstIf | AstBlock,
    ) {
        super();
    }

    toObject(): any {
        return {
            astType: 'if',
            test: this.test.toObject(),
            true: {
                member: Object.keys(this.member).reduce((acc, key) => {
                    acc[key] = this.member[key].toObject();
                    return acc;
                }, {} as { [key: string]: any; }),
                statements: this.statements.map(s => s.toObject()),
            },
            false: this.falseBlock ? this.falseBlock.toObject() : null,
        };
    }
}
