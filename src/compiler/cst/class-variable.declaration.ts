import { CstNode, IToken } from "chevrotain"
import { CstTypeDeclaration } from "./type.declaration"
import { CstAssignmentExpression } from "./assign.expression"

export interface CstClassVariableDeclaration extends CstNode {
    name: "classVariableDeclaration"
    children: {
        identifier: [IToken]
        type?: [CstTypeDeclaration]
        defaultValue?: [CstAssignmentExpression]
    }
}