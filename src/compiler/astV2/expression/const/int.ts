import { motorSingleton } from "../../../../utils/singleton";
import { AstI8, AstI16, AstI32, AstI64 } from "../../type/int";
import { AstType } from "../../type/type";
import { AstConst } from "./const";

export class AstConstI8 extends AstConst {
    readonly type: AstType = motorSingleton(AstI8)
}

export class AstConstI16 extends AstConst {
    readonly type: AstType = motorSingleton(AstI16)
}

export class AstConstI32 extends AstConst {
    readonly type: AstType = motorSingleton(AstI32)
}

export class AstConstI64 extends AstConst {
    readonly type: AstType = motorSingleton(AstI64)
}