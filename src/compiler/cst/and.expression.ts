import { CstNode, IToken } from "chevrotain"
import { CstLOrExpression } from "./lor.expression"

export interface CstAndExpression extends CstNode {
    name: "andExpression"
    children: {
        left: [CstLOrExpression]
        operator?: [IToken]
        right?: [CstAndExpression]
    }
}