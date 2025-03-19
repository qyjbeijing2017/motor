import { AstWhile } from "./while";
import { AstStatement } from "./statement";

export class AstBreak extends AstStatement {
    constructor(
        readonly loop: AstWhile,
    ) {
        super();
    }

    toObject(): string {
        return "break";
    }
}