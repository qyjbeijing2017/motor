import { CstNode, IToken } from "chevrotain"
import { CstConditionExpression } from "./condition.expression"

export interface CstAssignmentExpression extends CstNode {
    name: "assignExpression"
    children: {
        left: [CstConditionExpression]
        operator?: [IToken]
        right?: [CstAssignmentExpression]
    }
}