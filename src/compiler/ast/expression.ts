import { AstStatement } from "./statement";
import { AstType } from "./declaration/type";

export abstract class AstExpression extends AstStatement {
    abstract type: AstType;
}
