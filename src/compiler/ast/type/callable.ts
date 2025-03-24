import { AstType } from "./type";

export interface AstCallable extends AstType {
    readonly params?: AstType[];
    readonly returnType: AstType;
}

export function isAstCallable(value: any): value is AstCallable {
    return value && value.returnType;
}