import { CstNode, IToken } from "chevrotain";

export interface CstExponentiationExpression extends CstNode {
    name: 'exponentiationExpression'
    children: {
        left: [CstNode]
        operator?: [IToken]
        right?: [CstNode]
    }
}