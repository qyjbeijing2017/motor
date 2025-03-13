import { CstNode, IToken } from "chevrotain"

export interface CstGetExpression extends CstNode {
    name: "getExpression"
    children: {
        identifier: [IToken]
    }
}