import { AstStatement } from "./statement";

export interface AstBreak extends AstStatement {
    type: 'break';
}