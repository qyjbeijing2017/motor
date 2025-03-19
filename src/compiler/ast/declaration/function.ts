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

    toJson(space?: string | number): string {
        return JSON.stringify({
            member: Object.keys(this.member).reduce((acc, key) => {
                acc[key] = this.member[key].toJson(space);
                return acc;
            }, {} as { [key: string]: any; }),
            statements: this.statements.map(s => s.toJson(space)),
        }, null, space);
    }
}
