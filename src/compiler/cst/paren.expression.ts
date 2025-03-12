import { CstNode, IToken } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstParenExpression extends CstNode {
    name: "parenExpression"
    children: {
        expression: [CstAssignmentExpression]
    }
}