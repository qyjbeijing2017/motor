import { CstNode, IToken } from "chevrotain";
import { CstExponentiationExpression } from "./exponentiation.expression";

export interface CstPostfixExpression extends CstNode {
    name: 'postfixExpression'
    children: {
        left: [CstNode]
        operators?: (IToken | CstNode)[]
    }
}