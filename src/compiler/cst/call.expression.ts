import { CstNode } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstCallExpression extends CstNode {
    name: "callExpression"
    children: {
        args?: CstAssignmentExpression[]
    }
}