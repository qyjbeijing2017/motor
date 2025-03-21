import { motorSingleton } from "../../../../utils/singleton";
import { AstChar } from "../../type/char";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstChar extends AstConst {
    readonly type: AstType = motorSingleton(AstChar)
}
