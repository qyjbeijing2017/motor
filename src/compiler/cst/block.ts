import { CstNode } from "chevrotain";

export interface CstBlock {
    name: "block",
    children: {
        statements?: CstNode[];
    }
}