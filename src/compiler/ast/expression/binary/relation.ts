import { motorSingleton } from "../../../../utils/singleton";
import { IAstBlock } from "../../block.interface";
import { AstBool } from "../../type/bool";
import { AstType } from "../../type/type";
import { AstExpression } from "../expression";
import { AstBinary } from "./binary";

export class AstRelation extends AstBinary {
    readonly type: AstType
    constructor(
        readonly left: AstExpression,
        readonly right: AstExpression,
        readonly operator: string,
        parent?: IAstBlock,
    ) {
        super(left, right, operator, parent);
        this.type = motorSingleton(AstBool);
    }
}
