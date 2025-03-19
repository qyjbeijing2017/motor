import { AstValueType } from "./value";

export class AstU8 extends AstValueType {
    readonly size = 1;
    readonly identifier = "u8";
}

export class AstU16 extends AstValueType {
    readonly size = 2;
    readonly identifier = "u16";
}

export class AstU32 extends AstValueType {
    readonly size = 4;
    readonly identifier = "u32";
}

export class AstU64 extends AstValueType {
    readonly size = 8;
    readonly identifier = "u64";
}