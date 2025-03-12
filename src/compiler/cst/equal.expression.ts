import { CstNode, IToken } from "chevrotain"
import { CstRelationExpression } from "./relation.expression"

export interface CstEqualExpression extends CstNode {
    name: "equalityExpression"
    children: {
        left: [CstRelationExpression]
        operator?: [IToken]
        right?: [CstEqualExpression]
    }
}