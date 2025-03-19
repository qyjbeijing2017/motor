import { motorSingleton } from "../../../utils/singleton";
import { AstU16, AstU32, AstU64, AstU8 } from "../declaration/type/uint";
import { AstConst } from "./const";

export class AstConstU8 extends AstConst {
    readonly type = motorSingleton(AstU8);
}

export class AstConstU16 extends AstConst {
    readonly type = motorSingleton(AstU16);
}

export class AstConstU32 extends AstConst {
    readonly type = motorSingleton(AstU32);
}

export class AstConstU64 extends AstConst {
    readonly type = motorSingleton(AstU64);
}