import { CstNode } from "chevrotain";
import { CstRightToLeftExpression } from "./right-to-left-expression";

export interface CstReturnStatement extends CstNode {
    name: 'returnStatement'
    children: {
        expression?: [CstRightToLeftExpression]
    }
}