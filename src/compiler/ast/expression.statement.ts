import { AstStatement } from "./statement";
import { AstType } from "./type";

export interface AstExpression extends AstStatement {
    type?: AstType;
}