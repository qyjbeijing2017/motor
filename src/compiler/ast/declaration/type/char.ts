import { AstType } from "../type";

export class AstChar extends AstType {
    readonly size: number = 1;
    readonly identifier = "char";
}