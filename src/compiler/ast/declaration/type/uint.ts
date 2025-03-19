import { AstValueType } from "./value";

export class AstU8 extends AstValueType {
    readonly size = 1;
}

export class AstU16 extends AstValueType {
    readonly size = 2;
}

export class AstU32 extends AstValueType {
    readonly size = 4;
}

export class AstU64 extends AstValueType {
    readonly size = 8;
}