import { CstNode } from "chevrotain";
import { CstRightToLeftExpression } from "./right-to-left-expression";

export interface CstCallExpression extends CstNode {
    name: 'callExpression'
    children: {
        args?: CstRightToLeftExpression[]
    }
}