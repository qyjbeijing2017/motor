import { CstNode } from "chevrotain";
import { CstBlockStatement } from "./block-statement";
import { CstRightToLeftExpression } from "./right-to-left-expression";

export interface CstIfStatement extends CstNode {
    name: 'ifStatement'
    children: {
        test: [CstRightToLeftExpression]
        true: [CstBlockStatement]
        false?: [(CstBlockStatement | CstIfStatement)]
    }
}