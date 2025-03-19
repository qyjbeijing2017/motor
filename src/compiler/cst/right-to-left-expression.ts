import { CstNode, IToken } from "chevrotain";

export interface CstRightToLeftExpression extends CstNode {
    children: {
        left: [CstRightToLeftExpression]
        operator?: [IToken]
        right?: [CstRightToLeftExpression]
    }
}