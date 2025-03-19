import { CstNode, IToken } from "chevrotain";

export interface CstMemberExpression extends CstNode {
    name: 'memberExpression'
    children: {
        identifier: [IToken]
    }
}