import { motorSingleton } from "../../../../utils/singleton";
import { AstF16, AstF32, AstF8, AstF64 } from "../../type/float";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstF8 extends AstConst {
    readonly type: AstType = motorSingleton(AstF8)
}

export class AstConstF16 extends AstConst {
    readonly type: AstType = motorSingleton(AstF16)
}

export class AstConstF32 extends AstConst {
    readonly type: AstType = motorSingleton(AstF32)
}

export class AstConstF64 extends AstConst {
    readonly type: AstType = motorSingleton(AstF64)
}