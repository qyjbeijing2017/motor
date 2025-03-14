import { CstNode } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstListExpression extends CstNode {
    name: "listExpression"
    children: {
        elements?: [CstAssignmentExpression]
    }
}