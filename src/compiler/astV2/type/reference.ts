import { AstType } from "./type";

export abstract class AstReference extends AstType {
    readonly size: number = 4;
}