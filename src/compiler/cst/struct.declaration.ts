import { CstNode, IToken } from "chevrotain"
import { CstStructMemberDeclaration } from "./struct-member.declaration"

export interface CstStructDeclaration extends CstNode {
    name: "structDeclaration"
    children: {
        identifier: [IToken]
        members?: CstStructMemberDeclaration[]
    }
}