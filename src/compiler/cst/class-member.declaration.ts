import { CstNode } from "chevrotain"
import { CstClassVariableDeclaration } from "./class-variable.declaration"
import { CstFunctionDeclaration } from "./function.declaration"
import { CstClassDeclaration } from "./class.declaration"
import { CstStructDeclaration } from "./struct.declaration"
import { CstEnumDeclaration } from "./enum.declaration"

export interface CstClassMemberDeclaration extends CstNode {
    name: "classMemberDeclaration"
    children: {
        variables?: CstClassVariableDeclaration[]
        functions?: CstFunctionDeclaration[]
        structs?: CstStructDeclaration[]
        enums?: CstEnumDeclaration[]
        classes?: CstClassDeclaration[]
    }
}