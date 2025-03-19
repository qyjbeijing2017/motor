import { CstNode } from "chevrotain";
import { CstBlockStatement } from "./block-statement";
import { CstRightToLeftExpression } from "./right-to-left-expression";

export interface CstWhileStatement extends CstNode {
    name: 'whileStatement'
    children: {
        test: [CstRightToLeftExpression]
        block: [CstBlockStatement]
    }
}