import { CstNode, IToken } from "chevrotain"
import { CstEqualExpression } from "./equal.expression"

export interface CstLAndExpression extends CstNode {
    name: "lAndExpression"
    children: {
        left: [CstEqualExpression]
        operator?: [IToken]
        right?: [CstLAndExpression]
    }
}