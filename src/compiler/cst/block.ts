import { CstNode } from "chevrotain";

export interface CstBlock extends CstNode {
    name: 'name'
    children: {
        statements: CstNode[]
    }
}