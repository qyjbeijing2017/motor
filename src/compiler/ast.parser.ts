import { motorTokens } from "./lexer.compiler";
import { MotorParser } from "./parser.compiler";
import { motorSingleton } from "../utils/singleton";
import { CstBlock } from "./cst/block";
import { AstBlock } from "./ast/block";
import { AstStatement } from "./ast/statement";
import { AstBinary, AstBinaryOperator } from "./ast/binary";
import { CstConditionalExpression } from "./cst/conditional-expression";
import { AstTernary } from "./ast/ternary";
import { CstLeftToRightExpression } from "./cst/left-to-right-expression";
import { CstUnaryExpression } from "./cst/unary-expression";
import { AstUnary, AstUnaryOperator } from "./ast/unary";
import { CstRightToLeftExpression } from "./cst/right-to-left-expression";
import { CstPostfixExpression } from "./cst/postfix-expression";

export class AstParser extends motorSingleton(MotorParser).getBaseCstVisitorConstructorWithDefaults() {
    constructor() {
        super(motorTokens);
    }

    rightToLeftExpression(cst: CstRightToLeftExpression['children'], block: AstBlock): AstStatement | AstBinary {
        const left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            return new AstBinary(cst.operator[0].image as AstBinaryOperator, left, this.visit(cst.right[0], parent));
        }
        return left;
    }

    leftToRightExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        let left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            for (let i = 0; i < cst.right.length; i++) {
                left = new AstBinary(cst.operator[i].image as AstBinaryOperator, left, this.visit(cst.right[i], block));
            }
        }
        return left;
    }

    atomicExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    }

    indexExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    }

    callExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    }

    memberExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    }

    postfixExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    }

    exponentiationExpression(cst: CstRightToLeftExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.rightToLeftExpression(cst, block);
    }

    unaryExpression(cst: CstUnaryExpression['children'], block: AstBlock): AstStatement | AstUnary {
        const right = this.visit(cst.right[0], block);
        if (cst.operator) {
            return new AstUnary(cst.operator[0].image as AstUnaryOperator, right);
        }
        return right;
    }

    multiplicativeExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    additiveExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    moveExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    relationExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    equalityExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    lAndExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    xorExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    lOrExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    andExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    orExpression(cst: CstLeftToRightExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    conditionalExpression(cst: CstConditionalExpression['children'], block: AstBlock): AstStatement | AstBinary {
        const test = this.visit(cst.test[0], block);
        if (cst.true && cst.false) {
            return new AstTernary(test, this.visit(cst.true[0], block), this.visit(cst.false[0], block));
        }
        return test;
    }

    assignExpression(cst: CstRightToLeftExpression['children'], block: AstBlock): AstStatement | AstBinary {
        return this.rightToLeftExpression(cst, block);
    }

    block(cst: CstBlock['children'], parent?: AstBlock): AstBlock {
        const block = new AstBlock(parent);
        for (const statement of cst.statements) {
            this.visit(statement, block);
        }
        return block;
    }

}