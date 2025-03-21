import { AstDeclaration } from "./declaration/declaration";
import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export interface IAstBlock {
    readonly parent?: IAstBlock;
    readonly types: {
        [key: string]: AstType;
    }
    readonly member: {
        [key: string]: AstDeclaration;
    }
    readonly statements: AstStatement[];
}


export class AstBlock extends AstStatement implements IAstBlock {
    readonly types: {
        [key: string]: AstType;
    } = {};
    readonly member: {
        [key: string]: AstDeclaration;
    } = {};
    readonly statements: AstStatement[] = [];
    constructor(readonly parent?: IAstBlock) {
        super();
    }
}