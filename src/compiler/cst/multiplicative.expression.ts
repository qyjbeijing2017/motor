import { CstNode, IToken } from "chevrotain"
import { CstUnaryExpression } from "./unaryExpression"

export interface CstMultiplicativeExpression extends CstNode {
    name: "multiplicativeExpression"
    children: {
        left: [CstUnaryExpression]
        operator?: [IToken]
        right?: [CstMultiplicativeExpression]
    }
}