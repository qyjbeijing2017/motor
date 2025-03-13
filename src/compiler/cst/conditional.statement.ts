import { CstNode, IToken } from "chevrotain"
import { CstRelationExpression } from "./relation.expression"
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