import { CstNode, IToken } from "chevrotain";

export interface CstLeftToRightExpression extends CstNode {
    children: {
        left: [CstLeftToRightExpression]
        operator?: IToken[]
        right?: CstLeftToRightExpression[]
    }
}