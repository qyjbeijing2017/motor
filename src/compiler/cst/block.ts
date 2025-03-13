import { CstAssignmentExpression } from "./assign.expression";
import { CstBlockStatement } from "./block.statement";
import { CstFunctionDeclaration } from "./function";

export interface CstBlock {
    name: "block",
    children: {
        statements?: (
            CstAssignmentExpression | 
            CstBlockStatement |
            CstFunctionDeclaration
        )[];
    }
}