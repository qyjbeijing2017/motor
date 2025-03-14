import { CstNode } from "chevrotain"
import { CstBlockStatement } from "./block.statement"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstConditionalStatement extends CstNode {
    name: "equalityExpression"
    children: {
        test: [CstAssignmentExpression]
        true: [CstBlockStatement]
        alternate?: [CstBlockStatement | CstConditionalStatement]
    }
}