import { AstDeclaration } from "./declaration";

export abstract class AstType extends AstDeclaration {
    abstract readonly size: number;
    readonly member: {
        [key: string]: AstType;
    } = {};
    pointer(): number {
        return 0;
    }
}