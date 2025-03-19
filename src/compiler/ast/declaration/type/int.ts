import { AstValueType } from "./value";

export class AstI8 extends AstValueType {
    readonly size = 1;
    readonly identifier = "i8";
}

export class AstI16 extends AstValueType {
    readonly size = 2;
    readonly identifier = "i16";
}

export class AstI32 extends AstValueType {
    readonly size = 4;
    readonly identifier = "i32";
}

export class AstI64 extends AstValueType {
    readonly size = 8;
    readonly identifier = "i64";
}