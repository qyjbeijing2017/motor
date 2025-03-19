import { AstWhile } from "./while";
import { AstStatement } from "./statement";

export class AstBreak extends AstStatement {
    constructor(
        readonly loop: AstWhile,
    ) {
        super();
    }

    toJson(space?: string | number): string {
        return "break";
    }
}