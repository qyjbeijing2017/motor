import { CstNode } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstThrowStatement extends CstNode {
    name: "throwStatement"
    children: {
        expression: [CstAssignmentExpression]
    }
}