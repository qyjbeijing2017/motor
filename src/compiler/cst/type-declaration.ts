import { CstNode, IToken } from "chevrotain";

export interface CstTypeDeclaration extends CstNode {
    name: 'typeDeclaration'
    children: {
        type: [IToken]
    }
}