import { IAstBlock } from "../block.interface";
import { AstStatement } from "../statement";

export class AstBreak extends AstStatement {
    constructor(
        readonly parent: IAstBlock | null = null,
    ) {
        super(parent);
    }
}