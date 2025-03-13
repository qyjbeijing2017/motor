import { AstPostFix } from "./postfix.expression";

export interface AstGet extends AstPostFix {
    identifier: string;
}