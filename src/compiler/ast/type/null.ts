import { AstReference } from "./reference";

export class AstNull extends AstReference {
    readonly name: string = 'null';
}