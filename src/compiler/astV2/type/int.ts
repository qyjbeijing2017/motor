import { AstCallable } from "./callAble";
import { AstType } from "./type";

export class AstI8 extends AstType implements AstCallable {
    readonly size = 1;
    readonly name = 'i8';
    readonly returnType: AstType = this;
}

export class AstI16 extends AstType implements AstCallable {
    readonly size = 2;
    readonly name = 'i16';
    readonly returnType: AstType = this;
}

export class AstI32 extends AstType implements AstCallable {
    readonly size = 4;
    readonly name = 'i32';
    readonly returnType: AstType = this;
}

export class AstI64 extends AstType implements AstCallable {
    readonly size = 8;
    readonly name = 'i64';
    readonly returnType: AstType = this;
}