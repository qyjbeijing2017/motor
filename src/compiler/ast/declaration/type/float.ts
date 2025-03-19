import { AstValueType } from "./value";

export class AstF8 extends AstValueType {
    readonly size = 1;
    readonly identifier = "f8";
}

export class AstF16 extends AstValueType {
    readonly size = 2;
    readonly identifier = "f16";
}

export class AstF32 extends AstValueType {
    readonly size = 4;
    readonly identifier = "f32";
}

export class AstF64 extends AstValueType {
    readonly size = 8;
    readonly identifier = "f64";
}