import { AstStatement } from "./statement";
import { AstType } from "./type";
import { AstVariable } from "./variable.expression";

export interface AstEnum extends AstStatement {
    astType: 'enum';
    identifier: string;
    type?: AstType;
    members: AstVariable[];
}