import { CstNode, IToken } from "chevrotain"
import { CstStructMemberDeclaration } from "./struct-member.declearation"

export interface CstStructDeclaration extends CstNode {
    name: "structDeclaration"
    children: {
        identifier: [IToken]
        members?: CstStructMemberDeclaration[]
    }
}