import { AstCallable } from "./callAble";
import { AstType } from "./type";

export class AstChar extends AstType implements AstCallable {
    readonly size: number = 1;
    readonly name: string = 'char';
    readonly returnType: AstType = this;
}