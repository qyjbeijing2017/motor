import { CstNode, IToken } from "chevrotain"
import { CstAdditiveExpression } from "./additive.expression"

export interface CstMoveExpression extends CstNode {
    name: "moveExpression"
    children: {
        left: [CstAdditiveExpression]
        operator?: [IToken]
        right?: [CstMoveExpression]
    }
}