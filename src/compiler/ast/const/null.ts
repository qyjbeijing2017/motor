import { motorSingleton } from "../../../utils/singleton";
import { AstNull } from "../declaration/type/null";
import { AstConst } from "./const";

export class AstConstNull extends AstConst {
    readonly type = motorSingleton(AstNull);
}
