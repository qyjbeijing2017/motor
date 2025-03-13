import { CstNode, IToken } from "chevrotain"
import { CstRelationExpression } from "./relation.expression"
import { CstTypeDeclaration } from "./type.declaration"
import { CstBlockStatement } from "./block.statement"

export interface CstFunctionDeclaration extends CstNode {
    name: "functionDeclaration"
    children: {
        identifier: [IToken]
        returnType?: [CstTypeDeclaration]
        paramIdentifiers?: IToken[]
        paramTypes?: CstTypeDeclaration[]
        body: [CstBlockStatement]
    }
}