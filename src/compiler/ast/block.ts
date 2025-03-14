import { AstClass } from "./class";
import { AstEnum } from "./enum";
import { AstFunction } from "./function";
import { AstStatement } from "./statement";
import { AstStruct } from "./struct";
import { AstVariable } from "./variable.expression";

export interface AstBlock extends AstStatement {
    astType: 'block' | 'while' | 'function' | 'branch' | 'for' | 'try'
    parent?: AstBlock | AstClass
    members: {
        [name: string]: AstVariable | AstFunction | AstStruct | AstClass | AstEnum
    }
    statements: AstStatement[];
}
