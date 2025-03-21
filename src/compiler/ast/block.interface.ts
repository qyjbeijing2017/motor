import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export interface IAstBlock {
    readonly parent?: IAstBlock | null;
    types?: {
        [name: string]: AstType;
    }
    members?: {
        [name: string]: AstType;
    }
    statements: AstStatement[];
}