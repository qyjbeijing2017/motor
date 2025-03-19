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

    toJson(space?: string | number): string {
        return JSON.stringify({
            test: this.test.toJson(),
            true: {
                member: Object.keys(this.member).reduce((acc, key) => {
                    acc[key] = this.member[key].toJson(space);
                    return acc;
                }, {} as { [key: string]: any; }),
                statements: this.statements.map(s => s.toJson(space)),
            },
            false: this.falseBlock ? this.falseBlock.toJson() : null,
        }, null, space);
    }
}
