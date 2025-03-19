import { AstDeclaration } from "./declaration";

export abstract class AstType extends AstDeclaration {
    abstract readonly size: number;
    readonly member: {
        [key: string]: AstType;
    } = {};
    abstract readonly identifier: string;
    pointer(): number {
        return 0;
    }

    toObject() {
        return this.identifier;
    }
}