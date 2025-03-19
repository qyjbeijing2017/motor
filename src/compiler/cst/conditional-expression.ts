import { CstNode } from "chevrotain";
import { CstLeftToRightExpression } from "./left-to-right-expression";

export interface CstConditionalExpression extends CstNode {
    name: 'conditionalExpression'
    children: {
        test: [CstLeftToRightExpression]
        true?: [CstConditionalExpression]
        false?: [CstConditionalExpression]
    }
}