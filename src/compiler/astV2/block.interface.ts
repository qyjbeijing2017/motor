import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export interface IAstBlock {
    readonly parent?: IAstBlock | null;
    readonly types?: {
        [name: string]: AstType;
    }
    readonly members?: {
        [name: string]: AstType;
    }
    statements: AstStatement[];
}