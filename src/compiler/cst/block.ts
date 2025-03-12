import { CstAssignmentExpression } from "./assign.expression";
import { CstBlockStatement } from "./block.statement";

export interface CstBlock {
    name: "block",
    children: {
        statements?: (
            CstAssignmentExpression | 
            CstBlockStatement
        )[];
    }
}