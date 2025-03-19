import { CstNode, IToken } from "chevrotain";
import { CstLeftToRightExpression } from "./left-to-right-expression";
import { CstBlockStatement } from "./block-statement";
import { CstTypeDeclaration } from "./type-declaration";
import { CstVariableDeclaration } from "./variable-declaration";

export interface CstFunctionDeclaration extends CstNode {
    name: 'functionDeclaration'
    children: {
        identifier: [IToken]
        params?: CstVariableDeclaration[]
        type?: [CstTypeDeclaration]
        block: [CstBlockStatement]
    }
}