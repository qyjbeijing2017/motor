import { AstBlock } from "./ast/block";
import { AstStatement } from "./ast/statement";

class MotorTypeInference {

    block(node: AstBlock) {
        
    }
    
    visit(node: AstStatement, param: any) {
        (this as any)[node.astType](node, param);
    }
}

export const motorTypeInference = new MotorTypeInference();