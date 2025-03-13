import { CstNode, IToken } from "chevrotain"
import { CstLOrExpression } from "./lor.expression"
import { CstGetExpression } from "./get.expression"
import { CstIndexExpression } from "./index.expression"
import { CstCallExpression } from "./call.expression"

export interface CstPostFixExpression extends CstNode {
    name: "exponentiationExpression"
    children: {
        left: [CstLOrExpression]
        operators?: (CstGetExpression | CstIndexExpression | CstCallExpression| IToken)[]
    }
}