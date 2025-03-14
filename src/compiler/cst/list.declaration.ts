import { CstNode, IToken } from "chevrotain";
import { CstAssignmentExpression } from "./assign.expression";

export interface CstListDeclaration extends CstNode {
    name: "listDeclaration"
    children: {
        index: [CstAssignmentExpression]
    }
}