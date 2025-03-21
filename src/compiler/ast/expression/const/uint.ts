import { motorSingleton } from "../../../../utils/singleton";
import { AstU8, AstU16, AstU32, AstU64 } from "../../type/uint";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstU8 extends AstConst {
    readonly type: AstType = motorSingleton(AstU8)
}

export class AstConstU16 extends AstConst {
    readonly type: AstType = motorSingleton(AstU16)
}

export class AstConstU32 extends AstConst {
    readonly type: AstType = motorSingleton(AstU32)
}

export class AstConstU64 extends AstConst {
    readonly type: AstType = motorSingleton(AstU64)
}