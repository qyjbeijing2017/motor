import { CstNode } from "chevrotain"

export interface CstAssignmentExpression extends CstNode {
    name: "assignExpression"
    children: {
        left: [CstNode]
        operator: CstNode[]
        right: CstNode[]
    }
}