import { AstStatement } from "./statement";
import { IAstBlock } from "./block.interface";
import { AstExpression } from "./expression";

export class AstWhile extends AstStatement implements IAstBlock {
    readonly member: { [key: string]: any; } = {};
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent: IAstBlock,
        readonly test: AstExpression,
    ){
        super();
    }

    toObject() {
        return {
            astType: 'while',
            test: this.test.toObject(),
            member: Object.keys(this.member).reduce((acc, key) => {
                acc[key] = this.member[key];
                return acc;
            }, {} as { [key: string]: any; }),
            statements: this.statements.map(s => s.toObject()),
        }
    }
}
