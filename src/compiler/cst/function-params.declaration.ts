import { CstNode, IToken } from "chevrotain"
import { CstTypeDeclaration } from "./type.declaration"

export interface CstFunctionParamDeclaration extends CstNode {
    name: "functionParam"
    children: {
        identifier: [IToken]
        type?: [CstTypeDeclaration]
    }
}