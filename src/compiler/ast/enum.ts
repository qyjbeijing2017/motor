import { AstStatement } from "./statement";
import { AstType } from "./type";
import { AstVariable } from "./variable.expression";

export interface AstEnum extends AstStatement {
    astType: 'enum'
    type?: AstType
    members: {
        [key: string]: AstVariable;
    }
    identifier: string
    ref?: boolean
}