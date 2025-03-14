import { AstClass } from "./class";
import { AstFunction } from "./function";
import { AstStatement } from "./statement";
import { AstStruct } from "./struct";
import { AstVariable } from "./variable.expression";

export interface AstBlock extends AstStatement {
    astType: 'block' | 'while' | 'function' | 'branch' | 'for' | 'try'
    parent?: AstBlock;
    variables: {
        [name: string]: AstVariable
    };
    classes: {
        [name: string]: AstClass
    };
    structs: {
        [name: string]: AstStruct
    };
    functions: {
        [name: string]: AstFunction
    };
    statements: AstStatement[];
}
