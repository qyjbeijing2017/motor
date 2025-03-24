import { AstCallable } from "./callable";
import { AstType } from "./type";

export class AstU8 extends AstType implements AstCallable {
    readonly size = 1;
    readonly name = 'u8';
    readonly returnType: AstType = this;
}

export class AstU16 extends AstType implements AstCallable {
    readonly size = 2;
    readonly name = 'u16';
    readonly returnType: AstType = this;
}

export class AstU32 extends AstType implements AstCallable {
    readonly size = 4;
    readonly name = 'u32';
    readonly returnType: AstType = this;
}

export class AstU64 extends AstType implements AstCallable {
    readonly size = 8;
    readonly name = 'u64';
    readonly returnType: AstType = this;
}