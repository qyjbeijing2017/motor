import { CstNode, IToken } from "chevrotain";
import { CstParenExpression } from "./paren.expression";


export interface CstAtomicExpression extends CstNode {
    name: "atomicExpression",
    children: {
        const?: [IToken]
        variable?: [IToken]
        paren?: [CstParenExpression]
    }
}