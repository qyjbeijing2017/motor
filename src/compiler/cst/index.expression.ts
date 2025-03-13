import { CstNode, IToken } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstIndexExpression extends CstNode {
    name: "indexExpression"
    children: {
        index: [CstAssignmentExpression]
    }
}