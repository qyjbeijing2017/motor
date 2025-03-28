import { MotorAst } from "../ast";
import { IAstBlock } from "../block.interface";
import { AstDeclaration } from "../expression/declaration";

export abstract class AstType extends MotorAst {
    abstract readonly size: number;
    abstract readonly name: string;
    members?: { [name: string]: AstDeclaration };

    static findTypeByName(name: string, parent?: IAstBlock): AstType | undefined {
        if(!parent) {
            return;
        }
        if(parent.types && parent.types[name]) {
            return parent.types[name];
        }
        return AstType.findTypeByName(name, parent.parent)
    }
}