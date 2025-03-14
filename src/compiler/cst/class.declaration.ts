import { CstNode, IToken } from "chevrotain"
import { CstClassMemberDeclaration } from "./class-member.declaration"

export interface CstClassDeclaration extends CstNode {
    name: "classDeclaration"
    children: {
        identifier: [IToken]
        members?: CstClassMemberDeclaration[]
    }
}