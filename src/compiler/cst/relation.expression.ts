import { CstNode, IToken } from "chevrotain"
import { CstMoveExpression } from "./move.expression"

export interface CstRelationExpression extends CstNode {
    name: "relationExpression"
    children: {
        left: [CstMoveExpression]
        operator?: [IToken]
        right?: [CstRelationExpression]
    }
}