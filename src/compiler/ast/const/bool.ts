import { motorSingleton } from "../../../utils/singleton";
import { AstBool } from "../declaration/type/bool";
import { AstConst } from "./const";

export class AstConstBool extends AstConst {
    readonly type = motorSingleton(AstBool);
}
