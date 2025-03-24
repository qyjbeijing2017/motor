import { AstCallable } from "./callable";
import { AstType } from "./type";

export class AstChar extends AstType implements AstCallable {
    readonly size: number = 1;
    readonly name: string = 'char';
    readonly returnType: AstType = this;
}