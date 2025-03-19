import { AstExpression } from "./expression";
import { AstType } from "./declaration/type";

export class AstMember extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly base: AstType,
        readonly key: string,
    ) {
        super();
        if(key in base.member) {
            this.type = base.member[key];
        } else {
            throw new Error(`Member ${key} not found in ${base}`);
        }
    }

    toObject() {
        return {
            astType: 'member',
            base: this.base.toObject(),
            key: this.key,
            type: this.type.toObject(),
        };
    }
}