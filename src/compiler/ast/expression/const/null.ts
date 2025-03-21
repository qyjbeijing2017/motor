import { motorSingleton } from "../../../../utils/singleton";
import { AstNull } from "../../type/null";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstNull extends AstConst {
    readonly type: AstType = motorSingleton(AstNull)
}
