import { motorParser } from "./parser.compiler";
import { CstAssignmentExpression } from "./cst/assign.expression";
import { CstBlock } from "./cst/block";
import { CstBlockStatement } from "./cst/block.statement";
import { AstBlock } from "./ast/block";
import { AstExpression } from "./ast/expression.statement";
import { AstBinary } from "./ast/binary.expression";
import { AstStatement } from "./ast/statement";
import { CstConditionExpression } from "./cst/condition.expression";
import { AstTernary } from "./ast/ternary.statement";
import { CstOrExpression } from "./cst/or.expression";
import { CstAndExpression } from "./cst/and.expression";
import { CstLOrExpression } from "./cst/lor.expression";
import { CstLAndExpression } from "./cst/land.expression";
import { CstEqualExpression } from "./cst/equal.expression";
import { CstRelationExpression } from "./cst/relation.expression";
import { CstMoveExpression } from "./cst/move.expression";
import { CstAdditiveExpression } from "./cst/additive.expression";
import { CstMultiplicativeExpression } from "./cst/multiplicative.expression";
import { CstUnaryExpression } from "./cst/unaryExpression";
import { AstUnary } from "./ast/unary.expression";
import { CstExponentiationExpression } from "./cst/exponentiation.expression";
import { CstPostFixExpression } from "./cst/postfix.expression";
import { CstAtomicExpression } from "./cst/atomic.expression";

import { Integer, Float, Char, String, Bool, TypeInt32, TypeFloat32, TypeBool, TypeChar, TypeString } from "./lexer.compiler";
import { AstConst } from "./ast/const.expression";
import { AstVariable } from "./ast/variable.expression";
import { CstXOrExpression } from "./cst/xor.expression";
import { CstParenExpression } from "./cst/paren.expression";

const BaseVisitor = motorParser.getBaseCstVisitorConstructor();
const BaseVisitorWithDefaults = motorParser.getBaseCstVisitorConstructorWithDefaults();

class MotorAstVisitor extends BaseVisitorWithDefaults {
    constructor() {
        super();
        this.validateVisitor();
    }

    findVariable(name: string, block: AstBlock): AstVariable | null {
        if (block.variables[name]) {
            return block.variables[name];
        }
        if (block.parent) {
            return this.findVariable(name, block.parent);
        }
        return null;
    }

    parenExpression(cst: CstParenExpression['children'], block: AstBlock) {
        return this.visit(cst.expression[0], block);
    }

    atomicExpression(cst: CstAtomicExpression['children'], block: AstBlock) {
        if (cst.const) {
            switch (cst.const[0].tokenType.name) {
                case Integer.name:
                    return {
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeInt32.name,
                        }
                    } as AstConst
                case Float.name:
                    return {
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeFloat32.name,
                        }
                    } as AstConst
                case Char.name:
                    return {
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeChar.name,
                        }
                    } as AstConst
                case String.name:
                    return {
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeString.name,
                        }
                    } as AstConst
                case Bool.name:
                    return {
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeBool.name,
                        }
                    } as AstConst
            }
        }
        if (cst.variable) {
            let variable = this.findVariable(cst.variable[0].image, block);
            if (!variable) {
                variable = {
                    identifier: cst.variable[0].image,
                }
                block.variables[cst.variable[0].image] = variable;
            }
            return variable;
        }
        if (cst.paren) {
            return this.visit(cst.paren[0], block);
        }
    }

    postfixExpression(cst: CstPostFixExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        return left;
    }

    exponentiationExpression(cst: CstExponentiationExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            return {
                left,
                right: this.visit(cst.right[0], block),
                operator: cst.operator[0].image
            } as AstBinary;
        }
        return left;
    }

    unaryExpression(cst: CstUnaryExpression['children'], block: AstBlock) {
        const right: AstExpression = this.visit(cst.right[0], block);
        if (cst.operator) {
            return {
                right,
                operator: cst.operator[0].image
            } as AstUnary;
        }
        return right;
    }

    multiplicativeExpression(cst: CstMultiplicativeExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    additiveExpression(cst: CstAdditiveExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    moveExpression(cst: CstMoveExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    relationExpression(cst: CstRelationExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    equalityExpression(cst: CstEqualExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    lAndExpression(cst: CstLAndExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    xorExpression(cst: CstXOrExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    lOrExpression(cst: CstLOrExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    andExpression(cst: CstAndExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    orExpression(cst: CstOrExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            let last = left;
            for(let i = 0; i < cst.operator.length; i++) {
                last = {
                    left: last,
                    right: this.visit(cst.right[i], block),
                    operator: cst.operator[i].image
                } as AstBinary;
            }
            return last;
        }
        return left;
    }

    conditionalExpression(cst: CstConditionExpression['children'], block: AstBlock) {
        const test: AstExpression = this.visit(cst.test[0], block);
        if (cst.true && cst.false) {
            return {
                condition: test,
                true: this.visit(cst.true[0], block),
                false: this.visit(cst.false[0], block)
            } as AstTernary;
        }
        return test;
    }

    assignExpression(cst: CstAssignmentExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            return {
                left,
                right: this.visit(cst.right[0], block),
                operator: cst.operator[0].image
            } as AstBinary;
        }
        return left;
    }

    blockStatement(cst: CstBlockStatement['children'], block: AstBlock) {
        const result = this.visit(cst.block, block) as AstBlock;
        return result;
    }

    block(cst: CstBlock['children'], block?: AstBlock) {
        const astBlock: AstBlock = {
            parent: block,
            variables: {},
            classes: {},
            structs: {},
            functions: {},
            statements: []
        }
        for (const statement of cst.statements ?? []) {
            const result: AstStatement = this.visit(statement, astBlock);
            astBlock.statements.push(result);
        }
        return astBlock;
    }
}

export const motorAstVisitor = new MotorAstVisitor();
