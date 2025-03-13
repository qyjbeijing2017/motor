import { CstNode, IToken } from "chevrotain";
import { CstAssignmentExpression } from "./assign.expression";

export interface CstTypeDeclaration extends CstNode {
    name: "typeDeclaration"
    children: {
        type: [IToken]
        isList?: [IToken]
        index?: [CstAssignmentExpression]
    }
}