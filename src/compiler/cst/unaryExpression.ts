import { CstNode, IToken } from "chevrotain"
import { CstExponentiationExpression } from "./exponentiation.expression"

export interface CstUnaryExpression extends CstNode {
    name: "unaryExpression"
    children: {
        right: [CstExponentiationExpression]
        operator?: [IToken]
    }
}