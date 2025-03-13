import { CstNode } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstReturnStatement extends CstNode {
    name: "returnStatement"
    children: {
        expression: [CstAssignmentExpression]
    }
}