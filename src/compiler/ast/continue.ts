import { AstWhile } from "./while";
import { AstStatement } from "./statement";

export class AstContinue extends AstStatement {
    constructor(
        readonly loop: AstWhile,
    ) {
        super();
    }
}