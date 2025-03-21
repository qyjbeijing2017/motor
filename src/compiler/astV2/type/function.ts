import { IAstBlock } from "../block.interface";
import { AstStatement } from "../statement";
import { AstCallable } from "./callAble";
import { AstReference } from "./reference";
import { AstType } from "./type";

export class AstFunction extends AstReference implements IAstBlock, AstCallable {
    readonly types?: { [name: string]: AstType } = {};
    readonly statements: AstStatement[] = [];
    readonly params?: { name: string, type: AstType }[] = [];
    constructor(
        readonly name: string,
        readonly returnType: AstType,
        readonly parent: IAstBlock | null = null,
    ) {
        super();
    }
}