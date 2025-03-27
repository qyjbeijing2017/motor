import { MotorILInstruction } from "../il/instruction";
import { IAstBlock } from "./block.interface";
import { AstDeclaration } from "./expression/declaration";
import { AstStatement } from "./statement";
import { AstType } from "./type/type";

export class AstBlock extends AstStatement implements IAstBlock {
    types?: { [name: string]: AstType };
    members?: { [name: string]: AstDeclaration };
    readonly statements: AstStatement[] = [];
    constructor(
        readonly parent?: IAstBlock,
    ) {
        super(parent);
    }

    toIL(): MotorILInstruction[] {
        const result: MotorILInstruction[] = [];

        Object.keys(this.members || {}).forEach((key, index) => {
            
        });

        for (const statement of this.statements) {
            result.push(...statement.toIL());
        }
        return result;
    }
}