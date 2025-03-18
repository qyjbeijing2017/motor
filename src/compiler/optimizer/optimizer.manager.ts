import { AstStatement } from "../ast/statement";

export class MotorOptimizer {
    optimize(node: AstStatement) {
        return node;
    }
}

export const motorOptimizer = new MotorOptimizer();