import { CstNode, IToken } from "chevrotain"
import { CstLOrExpression } from "./lor.expression"

export interface CstPostFixExpression extends CstNode {
    name: "exponentiationExpression"
    children: {
        left: [CstLOrExpression]
    }
}