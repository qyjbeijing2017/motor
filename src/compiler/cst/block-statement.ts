import { CstNode } from "chevrotain";
import { CstBlock } from "./block";

export interface CstBlockStatement extends CstNode {
    name: 'blockStatement'
    children: {
        block: [CstBlock]
    }
}