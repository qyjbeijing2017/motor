import { CstNode, IToken } from "chevrotain"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstEnumMemberDeclaration extends CstNode {
    name: "enumDeclaration"
    children: {
        identifier: [IToken],
        value?: [CstAssignmentExpression]
    }
}