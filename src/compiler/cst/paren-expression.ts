import { CstNode } from "chevrotain";
import { CstLeftToRightExpression } from "./left-to-right-expression";

export interface CstParenExpression extends CstNode {
    name: 'parenExpression',
    children: {
        expression: [CstLeftToRightExpression]
    }
}