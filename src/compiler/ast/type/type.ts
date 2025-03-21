import { MotorAst } from "../ast";
import { IAstBlock } from "../block.interface";

export abstract class AstType extends MotorAst {
    abstract readonly size: number;
    abstract readonly name: string;
    members?: { [name: string]: AstType };

    static findTypeByName(name: string, parent?: IAstBlock | null): AstType | null {
        if(!parent) {
            return null;
        }
        if(parent.types && parent.types[name]) {
            return parent.types[name];
        }
        return AstType.findTypeByName(name, parent.parent)
    }
}