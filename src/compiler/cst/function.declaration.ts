import { CstNode, IToken } from "chevrotain"
import { CstTypeDeclaration } from "./type.declaration"
import { CstBlockStatement } from "./block.statement"
import { CstFunctionParamDeclaration } from "./function-params.declaration"

export interface CstFunctionDeclaration extends CstNode {
    name: "functionDeclaration"
    children: {
        identifier: [IToken]
        returnType?: [CstTypeDeclaration]
        params?: CstFunctionParamDeclaration[]
        body: [CstBlockStatement]
    }
}