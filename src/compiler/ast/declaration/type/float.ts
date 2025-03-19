import { AstValueType } from "./value";

export class AstF8 extends AstValueType {
    readonly size = 1;
}

export class AstF16 extends AstValueType {
    readonly size = 2;
}

export class AstF32 extends AstValueType {
    readonly size = 4;
}

export class AstF64 extends AstValueType {
    readonly size = 8;
}