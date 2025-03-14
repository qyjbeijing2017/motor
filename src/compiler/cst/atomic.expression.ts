import { CstNode, IToken } from "chevrotain";
import { CstParenExpression } from "./paren.expression";
import { CstListExpression } from "./list.expression";


export interface CstAtomicExpression extends CstNode {
    name: "atomicExpression",
    children: {
        const?: [IToken]
        variable?: [IToken]
        paren?: [CstParenExpression]
        list?: [CstListExpression]
    }
}