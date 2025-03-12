import { motorParser } from "./parser.compiler";
import { CstAssignmentExpression } from "./cst/assign.expression";
import { CstBlock } from "./cst/block";
import { CstBlockStatement } from "./cst/block.statement";

const BaseVisitor = motorParser.getBaseCstVisitorConstructor();
const BaseVisitorWithDefaults = motorParser.getBaseCstVisitorConstructorWithDefaults();

class MotorAstVisitor extends BaseVisitorWithDefaults {
    constructor() {
        super();
        this.validateVisitor();
    }

    blockStatement(cst: CstBlockStatement['children']) {
        this.visit(cst.block[0]);
    }

    assignExpression(cst: CstAssignmentExpression['children']) {
        this.visit(cst.left[0]);
    }
    

    block(cst: CstBlock['children']) {
        console.log(JSON.stringify(cst));
        for (const statement of cst.statements ?? []) {
            this.visit(statement);
        }
    }
}

export const motorAstVisitor = new MotorAstVisitor();
