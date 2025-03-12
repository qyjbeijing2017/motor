import { CstNode, IToken } from "chevrotain"
import { CstAndExpression } from "./and.expression"

export interface CstOrExpression extends CstNode {
    name: "xorExpression"
    children: {
        left: [CstAndExpression]
        operator?: [IToken]
        right?: [CstOrExpression]
    }
}