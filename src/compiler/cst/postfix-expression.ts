import { CstNode, IToken } from "chevrotain";
import { CstMemberExpression } from "./member-expression";

export interface CstPostfixExpression extends CstNode {
    name: 'postfixExpression'
    children: {
        left: [CstNode]
        operators?: (IToken | CstMemberExpression)[]
    }
}