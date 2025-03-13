import { CstNode } from "chevrotain";
import { CstAssignmentExpression } from "./assign.expression";
import { CstBlockStatement } from "./block.statement";

export interface CstWhileStatement extends CstNode {
    name: "whileStatement",
    children: {
        test: [CstAssignmentExpression]
        block: [CstBlockStatement]
    }
}