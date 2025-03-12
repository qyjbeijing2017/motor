import { CstNode, IToken } from "chevrotain"
import { CstLAndExpression } from "./land.expression"

export interface CstXOrExpression extends CstNode {
    name: "orExpression"
    children: {
        left: [CstLAndExpression]
        operator?: [IToken]
        right?: [CstXOrExpression]
    }
}