import { motorSingleton } from "../../../utils/singleton";
import { AstChar } from "../declaration/type/char";
import { AstConst } from "./const";

export class AstConstChar extends AstConst {
    readonly type = motorSingleton(AstChar);
}