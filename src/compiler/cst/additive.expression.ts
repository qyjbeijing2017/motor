import { CstNode, IToken } from "chevrotain"
import { CstMultiplicativeExpression } from "./multiplicative.expression"

export interface CstAdditiveExpression extends CstNode {
    name: "additiveExpression"
    children: {
        left: [CstMultiplicativeExpression]
        operator?: [IToken]
        right?: [CstAdditiveExpression]
    }
}