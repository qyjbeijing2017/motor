import { CstNode, IToken } from "chevrotain";
import { CstTypeDeclaration } from "./type-declaration";
import { CstRightToLeftExpression } from "./right-to-left-expression";

export interface CstVariableDeclaration extends CstNode {
    name: 'variableDeclaration'
    children: {
        identifier: [IToken]
        type: [CstTypeDeclaration]
        value?: [CstRightToLeftExpression]
    }
}