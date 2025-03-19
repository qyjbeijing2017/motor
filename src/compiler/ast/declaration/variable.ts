import { AstDeclaration } from "./declaration";
import { AstType } from "./type";

export class AstVariable extends AstDeclaration {
    constructor(
        readonly identifier: string,
        readonly type: AstType,
    ) {
        super();
    }

    toObject() {
        return {
            astType: 'variable',
            identifier: this.identifier,
            type: this.type.toObject()
        };
    }
}
