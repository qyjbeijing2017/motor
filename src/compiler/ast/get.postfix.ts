import { AstPostFix } from "./postfix.expression";

export interface AstGet extends AstPostFix {
    astType: 'get';
    identifier: string;
}