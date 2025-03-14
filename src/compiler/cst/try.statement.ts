import { CstNode, IToken } from "chevrotain"
import { CstBlockStatement } from "./block.statement"

export interface CstTryStatement extends CstNode {
    name: "tryStatement"
    children: {
        try: [CstBlockStatement],
        catch: [CstBlockStatement],
        finally?: [CstBlockStatement],
        catchIdentifier?: [IToken]
    }
}