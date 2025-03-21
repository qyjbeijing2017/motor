import { IAstBlock } from "../block.interface";
import { AstType } from "../type/type";
import { AstExpression } from "./expression";

export class AstVariable extends AstExpression {
    get type() {
        return AstVariable.findType(this.name, this.parent)!;
    }

    static findType(name: string, block: IAstBlock | null | undefined): AstType | null {
        if (!block) {
            return null;
        }
        if (block.types && name in block.types) {
            return block.types[name];
        }
        return AstVariable.findType(name, block.parent);
    }

    constructor(
        readonly name: string,
        readonly parent: IAstBlock | null = null,
        
    ) {
        super(parent);
        const type = AstVariable.findType(name, parent);
        if (!type) {
            throw new Error(`Identifier ${name} didn't declare before use`);
        }
    }
}