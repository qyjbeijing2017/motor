import { CstNode, IToken } from "chevrotain"
import { CstEnumMemberDeclaration } from "./enum-member.declaration"
import { CstTryStatement } from "./try.statement"

export interface CstEnumDeclaration extends CstNode {
    name: "enumDeclaration"
    children: {
        identifier: [IToken]
        type?: [CstTryStatement]
        members?: CstEnumMemberDeclaration[]
    }
}