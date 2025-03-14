import { motorParser } from "./parser.compiler";
import { CstAssignmentExpression } from "./cst/assign.expression";
import { CstBlock } from "./cst/block";
import { CstBlockStatement } from "./cst/block.statement";
import { AstBlock } from "./ast/block";
import { AstExpression } from "./ast/expression.statement";
import { AstBinary } from "./ast/binary.expression";
import { AstStatement } from "./ast/statement";
import { CstConditionExpression } from "./cst/condition.expression";
import { AstTernary } from "./ast/ternary.expression";
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
import { CstCallExpression } from "./cst/call.expression";
import { CstGetExpression } from "./cst/get.expression";
import { AstIncrement } from "./ast/increment.expression";
import { AstCall } from "./ast/call.postfix";
import { AstMember } from "./ast/member.postfix";
import { CstIndexExpression } from "./cst/index.expression";
import { AstIndex } from "./ast/index.postfix";
import { CstWhileStatement } from "./cst/while.statement";
import { AstWhile } from "./ast/while.statement";
import { CstFunctionDeclaration } from "./cst/function.declaration";
import { AstFunction } from "./ast/function";
import { CstTypeDeclaration } from "./cst/type.declaration";
import { AstType } from "./ast/type";
import { CstReturnStatement } from "./cst/return.statement";
import { AstReturn } from "./ast/return.statement";
import { CstNode } from "chevrotain";
import { AstContinue } from "./ast/continue.expression";
import { AstBreak } from "./ast/break.expression";
import { CstConditionalStatement } from "./cst/conditional.statement";
import { AstBranch } from "./ast/branch.statement";
import { CstForStatement } from "./cst/for.statement";
import { AstFor } from "./ast/for.statement";
import { CstThrowStatement } from "./cst/throw.statement";
import { AstThrow } from "./ast/throw.statement";
import { CstTryStatement } from "./cst/try.statement";
import { AstTry } from "./ast/try.statement";
import { CstStructDeclaration } from "./cst/struct.declaration";
import { CstStructMemberDeclaration } from "./cst/struct-member.declearation";
import { AstStruct } from "./ast/struct";
import { CstFunctionParamDeclaration } from "./cst/function-params.declaration";

const BaseVisitor = motorParser.getBaseCstVisitorConstructor();
const BaseVisitorWithDefaults = motorParser.getBaseCstVisitorConstructorWithDefaults();

class MotorAstVisitor extends BaseVisitorWithDefaults {
    constructor() {
        super();
        this.validateVisitor();
    }

    hasVariable(name: string, block: AstBlock): boolean {
        if (block.members[name]) {
            return true;
        }
        if (block.parent) {
            return this.hasVariable(name, block.parent);
        }
        return false;
    }

    parenExpression(cst: CstParenExpression['children'], block: AstBlock) {
        return this.visit(cst.expression[0], block);
    }

    atomicExpression(cst: CstAtomicExpression['children'], block: AstBlock) {
        if (cst.const) {
            switch (cst.const[0].tokenType.name) {
                case Integer.name:
                    return {
                        astType: 'const',
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeInt32.name,
                        }
                    } as AstConst
                case Float.name:
                    return {
                        astType: 'const',
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeFloat32.name,
                        }
                    } as AstConst
                case Char.name:
                    return {
                        astType: 'const',
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeChar.name,
                        }
                    } as AstConst
                case String.name:
                    return {
                        astType: 'const',
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeString.name,
                        }
                    } as AstConst
                case Bool.name:
                    return {
                        astType: 'const',
                        value: cst.const[0].image,
                        type: {
                            typeName: TypeBool.name,
                        }
                    } as AstConst
            }
        }
        if (cst.variable) {
            if (!(cst.variable[0].image in block.members)) {
                block.members[cst.variable[0].image] = {
                    astType: 'variable',
                    identifier: cst.variable[0].image,
                };
            }
            return block.members[cst.variable[0].image];
        }
        if (cst.paren) {
            return this.visit(cst.paren[0], block);
        }
    }

    indexExpression(cst: CstIndexExpression['children'], { block, base }: { block: AstBlock, base: AstExpression }) {
        return {
            astType: 'index',
            base,
            index: this.visit(cst.index[0], block)
        } as AstIndex;
    }

    memberExpression(cst: CstGetExpression['children'], { base }: { block: AstBlock, base: AstExpression }) {
        return {
            astType: 'get',
            base,
            identifier: cst.identifier[0].image
        } as AstMember;
    }

    callExpression(cst: CstCallExpression['children'], { block, base }: { block: AstBlock, base: AstExpression }) {
        return {
            astType: 'call',
            base,
            params: cst.args?.map(arg => this.visit(arg, block)) ?? []
        } as AstCall;
    }

    postfixExpression(cst: CstPostFixExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operators) {
            let base = left;
            for (let operator of cst.operators) {
                if ('name' in operator) {
                    base = this.visit(operator, { block, base });
                } else {
                    base = {
                        astType: 'increment',
                        left: base,
                        operator: operator.image
                    } as AstIncrement;
                }
            }
            return base;
        }
        return left;
    }

    exponentiationExpression(cst: CstExponentiationExpression['children'], block: AstBlock) {
        const left: AstExpression = this.visit(cst.left[0], block);
        if (cst.operator && cst.right) {
            return {
                astType: 'binary',
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
                astType: 'unary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
            for (let i = 0; i < cst.operator.length; i++) {
                last = {
                    astType: 'binary',
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
                astType: 'ternary',
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
                astType: 'binary',
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

    whileStatement(cst: CstWhileStatement['children'], block: AstBlock) {
        const whileBlock: AstBlock = this.visit(cst.block[0], block)
        return {
            ...whileBlock,
            test: this.visit(cst.test[0], block),
            astType: 'while',
        } as AstWhile;
    }

    forStatement(cst: CstForStatement['children'], block: AstBlock) {
        const forBlock: AstFor = {
            astType: 'for',
            parent: block,
            members: {
                [cst.identifier[0].image]: {
                    astType: 'variable',
                    identifier: cst.identifier[0].image,
                },
            },
            statements: [],
            iterable: this.visit(cst.iterable[0], block) as AstExpression,
        }
        for (const statement of cst.body[0].children.block[0].children.statements ?? []) {
            const result: AstStatement = this.visit(statement, forBlock);
            if (result)
                forBlock.statements.push(result);
        }
        return forBlock;
    }

    typeDeclaration(cst: CstTypeDeclaration['children'], block: AstBlock) {
        return {
            typeName: cst.type[0].image,
            isList: !!cst.isList,
            index: cst.index ? this.visit(cst.index[0], block) : undefined
        } as AstType;
    }

    returnStatement(cst: CstReturnStatement['children'], block: AstBlock) {
        return {
            astType: 'return',
            expression: cst.expression ? this.visit(cst.expression[0], block) : undefined,
        } as AstReturn;
    }

    functionParam(cst: CstFunctionParamDeclaration['children'], block: AstBlock) {
        const variable: AstVariable = {
            astType: 'variable',
            identifier: cst.identifier[0].image,
            type: cst.type ? this.visit(cst.type[0], block) : undefined,
        }
        block.members[cst.identifier[0].image] = variable;
    }

    functionDeclaration(cst: CstFunctionDeclaration['children'], block: AstBlock) {
        const astFunction: AstFunction = {
            astType: 'function',
            parent: block,
            members: {},
            statements: [],
            identifier: cst.identifier[0].image,
            params: [],
            returnType: "returnType" in cst ? this.visit(cst.returnType![0], block) : undefined,
        }
        for (const param of cst.params ?? []) {
            this.visit(param, astFunction);
        }
        for (const statement of cst.body[0].children.block[0].children.statements ?? []) {
            const result: AstStatement = this.visit(statement, astFunction);
            astFunction.statements.push(result);
        }
        block.members[astFunction.identifier] = astFunction;
    }

    continueStatement(cst: CstNode['children'], block: AstBlock) {
        return {
            astType: 'continue',
        } as AstContinue;
    }

    breakStatement(cst: CstNode['children'], block: AstBlock) {
        return {
            astType: 'break',
        } as AstBreak;
    }

    throwStatement(cst: CstThrowStatement['children'], block: AstBlock) {
        return {
            astType: 'throw',
            expression: this.visit(cst.expression[0], block)
        } as AstThrow;
    }

    tryStatement(cst: CstTryStatement['children'], block: AstBlock) {
        const tryBlock: AstTry = {
            ...this.visit(cst.try[0], block),
            astType: 'try',
            catch: {
                astType: 'block',
                parent: block,
                members: {},
                statements: []
            } as AstBlock,
            finally: 'finally' in cst && this.visit(cst.finally![0], block)
        }
        if ('catchIdentifier' in cst) {
            tryBlock.catch.members[cst.catchIdentifier![0].image] = {
                astType: 'variable',
                identifier: cst.catchIdentifier![0].image,
            } as AstVariable;
        }
        for (const statement of cst.catch[0].children.block[0].children.statements ?? []) {
            const result: AstStatement = this.visit(statement, tryBlock.catch);
            if (result)
                tryBlock.catch.statements.push(result);
        }
        return tryBlock;
    }

    conditionalStatement(cst: CstConditionalStatement['children'], block: AstBlock) {
        const test = this.visit(cst.test[0], block);
        const trueBlock = this.visit(cst.true[0], block);
        const falseBlock = 'alternate' in cst && this.visit(cst.alternate![0], block);
        return {
            ...trueBlock,
            astType: 'branch',
            test,
            false: falseBlock
        } as AstBranch;
    }

    structMemberDeclaration(cst: CstStructMemberDeclaration['children'], { block, struct }: { block: AstBlock; struct: AstStruct }) {
        const member: AstVariable = {
            astType: 'variable',
            identifier: cst.identifier[0].image,
            type: cst.type ? this.visit(cst.type[0], block) : undefined,
        }
        struct.members[cst.identifier[0].image] = member;
    }

    structDeclaration(cst: CstStructDeclaration['children'], block: AstBlock) {
        const struct: AstStruct = {
            astType: 'struct',
            members: {},
        }
        for (const member of cst.members ?? []) {
            this.visit(member, { block, struct });
        }
        block.members[cst.identifier[0].image] = struct;
    }

    block(cst: CstBlock['children'], block?: AstBlock) {
        const astBlock: AstBlock = {
            astType: 'block',
            parent: block,
            members: {},
            statements: []
        }
        for (const statement of cst.statements ?? []) {
            const result: AstStatement = this.visit(statement, astBlock);
            if (result)
                astBlock.statements.push(result);
        }
        return astBlock;
    }
}

export const motorAstVisitor = new MotorAstVisitor();
