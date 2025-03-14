import { CstNode, IToken } from "chevrotain"
import { CstTypeDeclaration } from "./type.declaration"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstStructMemberDeclaration extends CstNode {
    name: "structMemberDeclaration"
    children: {
        identifier: [IToken]
        type?: [CstTypeDeclaration]
        defaultValue?: [CstAssignmentExpression]
    }
}