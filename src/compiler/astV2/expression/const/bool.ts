import { motorSingleton } from "../../../../utils/singleton";
import { AstBool } from "../../type/bool";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstBool extends AstConst {
    readonly type: AstType = motorSingleton(AstBool)
}
