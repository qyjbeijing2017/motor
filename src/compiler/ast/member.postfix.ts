import { AstPostFix } from "./postfix.expression";

export interface AstMember extends AstPostFix {
    astType: 'get';
    identifier: string;
}