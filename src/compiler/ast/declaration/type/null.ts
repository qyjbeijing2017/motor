import { AstReferenceType } from "./reference";

export class AstNull extends AstReferenceType {
    readonly identifier: string = "null";
}