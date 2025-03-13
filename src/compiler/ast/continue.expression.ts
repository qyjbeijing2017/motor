import { AstStatement } from "./statement";

export interface AstContinue extends AstStatement {
    astType: 'continue';
}