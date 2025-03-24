import { AstType } from "./type";
import { AstCallable } from "./callable";

export class AstF8 extends AstType implements AstCallable {
    readonly size = 1;
    readonly name = 'f8';
    readonly returnType: AstType = this;
}

export class AstF16 extends AstType implements AstCallable {
    readonly size = 2;
    readonly name = 'f16';
    readonly returnType: AstType = this;
}

export class AstF32 extends AstType implements AstCallable {
    readonly size = 4;
    readonly name = 'f32';
    readonly returnType: AstType = this;
}

export class AstF64 extends AstType implements AstCallable {
    readonly size = 8;
    readonly name = 'f64';
    readonly returnType: AstType = this;
}