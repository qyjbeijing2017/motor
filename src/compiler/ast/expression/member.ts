import { IAstBlock } from "../block.interface";
import { AstExpression } from "./expression";

export class AstMember extends AstExpression {
    get type() {
        return this.identifier.type.members![this.key].type;
    }

    constructor(
        readonly identifier: AstExpression,
        readonly key: string,
        parent?: IAstBlock,
    ) {
        super(parent);
        if (identifier.type.members === undefined) {
            throw new Error(`Cannot access member ${key} of non-member type ${identifier.type.name}`);
        } else if (key in identifier.type.members === false) {
            throw new Error(`Type ${identifier.type.name} does not have member ${key}`);
        }
    }
}