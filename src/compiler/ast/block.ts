import { AstClass } from "./class";
import { AstStruct } from "./struct";
import { AstVariable } from "./variable";

export interface AstBlock {
    variables: {
        [name: string]: AstVariable
    };
    classes: {
        [name: string]: AstClass
    };
    structs: {
        [name: string]: AstStruct
    };
    statements: [];
}