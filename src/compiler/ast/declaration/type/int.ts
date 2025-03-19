import { AstValueType } from "./value";

export class AstI8 extends AstValueType {
    readonly size = 1;
}

export class AstI16 extends AstValueType {
    readonly size = 2;
}

export class AstI32 extends AstValueType {
    readonly size = 4;
}

export class AstI64 extends AstValueType {
    readonly size = 8;
}