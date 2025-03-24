import { IAstBlock } from "../block.interface";
import { AstType } from "../type/type";
import { AstExpression } from "./expression";
 
export class AstDeclaration extends AstExpression {
    static findType(name: string, block: IAstBlock | undefined): AstType | null {
        if (!block) {
            return null;
        }
        if (block.types && name in block.types) {
            return block.types[name];
        }
        return AstDeclaration.findType(name, block.parent);
    }

    constructor(
        readonly name: string,
        readonly type: AstType,
        readonly defaultValue?: AstExpression,
        readonly parent?: IAstBlock,
    ) {
        super(parent);
        if (parent) {
            if (!parent.members) {
                parent.members = {};
            }
            parent.members[name] = this;
        }
    }

    static get(name: string, block: IAstBlock | null | undefined): AstDeclaration {
        if (!block) {
            throw new Error(`Variable ${name} did not declare a type`);
        }

        if (block.members && name in block.members) {
            return block.members[name];
        }
        return AstDeclaration.get(name, block.parent);
    }
}