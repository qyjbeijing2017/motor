import { CstNode, IToken } from "chevrotain"
import { CstXOrExpression } from "./xor.expression"

export interface CstLOrExpression extends CstNode {
    name: "lOrExpression"
    children: {
        left: [CstXOrExpression]
        operator?: [IToken]
        right?: [CstLOrExpression]
    }
}