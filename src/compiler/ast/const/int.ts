import { motorSingleton } from "../../../utils/singleton";
import { AstI16, AstI32, AstI64, AstI8 } from "../declaration/type/int";
import { AstConst } from "./const";

export class AstConstI8 extends AstConst {
    readonly type = motorSingleton(AstI8);
}

export class AstConstI16 extends AstConst {
    readonly type = motorSingleton(AstI16);
}

export class AstConstI32 extends AstConst {
    readonly type = motorSingleton(AstI32);
}

export class AstConstI64 extends AstConst {
    readonly type = motorSingleton(AstI64);
}
