import { AstStatement } from "./statement";
import { AstVariable } from "./variable.expression";

export interface AstStruct extends AstStatement {
    astType: 'struct'
    members: { [key: string]: AstVariable }
    identifier: string
}