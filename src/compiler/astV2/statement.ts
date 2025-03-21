import { MotorAst } from "./ast";
import { IAstBlock } from "./block.interface";

export abstract class AstStatement extends MotorAst {
    constructor(readonly parent: IAstBlock | null = null) {
        super();
    }
}