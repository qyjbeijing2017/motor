import { AstReferenceType } from "./reference";

export class AstPointer extends AstReferenceType {
    readonly identifier: string = "pointer";
}