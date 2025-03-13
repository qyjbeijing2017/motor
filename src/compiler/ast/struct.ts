import { AstStatement } from "./statement";

export interface AstStruct extends AstStatement {
    astType: 'struct';
}