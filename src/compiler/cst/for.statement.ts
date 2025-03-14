import { CstNode, IToken } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"
import { CstBlockStatement } from "./block.statement"

export interface CstForStatement extends CstNode {
    name: "forStatement"
    children: {
        identifier: [IToken]
        iterable: [CstAssignmentExpression]
        body: [CstBlockStatement]
    }
}