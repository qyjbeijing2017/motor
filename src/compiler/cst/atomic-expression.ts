import { CstNode, IToken } from "chevrotain";

export interface CstAtomicExpression extends CstNode {
    name: 'atomicExpression'
    children: {
        const?: [IToken]
        variable?: [IToken]
        paren?: [CstNode]
    }
}