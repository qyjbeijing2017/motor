import { AstBlock } from "./block";
import { AstEnum } from "./enum";
import { AstFunction } from "./function";
import { AstStatement } from "./statement";
import { AstStruct } from "./struct";
import { AstVariable } from "./variable.expression";

export interface AstClass extends AstStatement {
    astType: 'class'
    parent?: AstBlock | AstClass
    identifier: string
    members: {
        [name: string]: AstVariable | AstFunction | AstStruct | AstClass | AstEnum
    }
}