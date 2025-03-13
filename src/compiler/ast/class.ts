import { AstStatement } from "./statement";

export interface AstClass extends AstStatement {
    astType: 'class';
    identifier: string;
}