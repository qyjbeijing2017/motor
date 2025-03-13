import { AstBlock } from "./block";
import { AstType } from "./type";

export interface AstParam {
    type: AstType;
    identifier: string;
}

export interface AstFunction extends AstBlock {
    returnType?: AstType;
    params?: AstParam[];
    identifier: string;
}