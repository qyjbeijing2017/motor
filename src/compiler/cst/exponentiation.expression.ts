import { CstNode, IToken } from "chevrotain"
import { CstPostFixExpression } from "./postfix.expression"

export interface CstExponentiationExpression extends CstNode {
    name: "exponentiationExpression"
    children: {
        left: [CstPostFixExpression]
        operator?: [IToken]
        right?: [CstExponentiationExpression]
    }
}