import { AstCallable } from "./callAble";
import { AstType } from "./type";

export class AstBool extends AstType implements AstCallable {
    readonly size: number = 1;
    readonly name: string = 'bool';
    readonly returnType: AstType = this;
}