import { AstDeclaration } from "./declaration/declaration";
import { AstStatement } from "./statement";

export interface IAstBlock {
    readonly parent: IAstBlock | null;
    readonly member: {
        [key: string]: AstDeclaration;
    };
    readonly statements: AstStatement[];
}