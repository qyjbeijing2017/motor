import { AstBlock } from "./block";
import { AstType } from "./type";
import { AstVariable } from "./variable.expression";

export interface AstFunction extends AstBlock {
    astType: 'function';
    returnType?: AstType;
    params: AstVariable[];
    identifier: string;
    ref?: boolean
}