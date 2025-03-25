import { IAstBlock } from "../../block.interface";
import { AstExpression } from "../expression";
import { AstBinary } from "./binary";
import { AstRelation } from "./relation";

export function binaryCreator(
    left: AstExpression,
    right: AstExpression,
    operator: string,
    parent?: IAstBlock
): AstBinary {
    if(
        operator === '==' ||
        operator === '!=' ||
        operator === '>' ||
        operator === '<' ||
        operator === '>=' ||
        operator === '<='
    ) {
        return new AstRelation(left, right, operator, parent);
    }
    return new AstBinary(left, right, operator, parent);
}