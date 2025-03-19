import { motorSingleton } from "../../../utils/singleton";
import { AstF16, AstF32, AstF64, AstF8 } from "../declaration/type/float";
import { AstConst } from "./const";

export class AstConstF8 extends AstConst {
    readonly type = motorSingleton(AstF8);
}

export class AstConstF16 extends AstConst {
    readonly type = motorSingleton(AstF16);
    
}

export class AstConstF32 extends AstConst {
    readonly type = motorSingleton(AstF32);
}

export class AstConstF64 extends AstConst {
    readonly type = motorSingleton(AstF64);
}
