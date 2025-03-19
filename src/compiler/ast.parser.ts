import {
    Bool, Char, Float, Integer, motorTokens, Null,
    TypeFloat64, TypeFloat16, TypeFloat8, TypeFloat32, TypeInt64, TypeInt16, TypeInt8, TypeInt32, TypeUint64, TypeUint16, TypeUint8, TypeUint32, TypeBool, TypeChar, TypeString, TypeList, Uint
} from "./lexer.compiler";
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
import { AstPostFix, AstPostfixOperator } from "./ast/postfix";
import { AstMember } from "./ast/member";
import { CstMemberExpression } from "./cst/member-expression";
import { AstCall } from "./ast/call";
import { CstCallExpression } from "./cst/call-expression";
import { CstAtomicExpression } from "./cst/atomic-expression";
import { CstParenExpression } from "./cst/paren-expression";
import { AstFunction } from "./ast/declaration/function";
import { AstDeclaration } from "./ast/declaration/declaration";
import { AstConstF32 } from "./ast/const/float";
import { AstConstU32 } from "./ast/const/uint";
import { AstConstI32 } from "./ast/const/int";
import { AstConstChar } from "./ast/const/char";
import { AstConstBool } from "./ast/const/bool";
import { AstConstNull } from "./ast/const/null";
import { AstType } from "./ast/declaration/type";
import { CstFunctionDeclaration } from "./cst/function-declaration";
import { IAstBlock } from "./ast/block.interface";
import { CstTypeDeclaration } from "./cst/type-declaration";
import { AstChar } from "./ast/declaration/type/char";
import { AstBool } from "./ast/declaration/type/bool";
import { AstF16, AstF32, AstF64, AstF8 } from "./ast/declaration/type/float";
import { AstI16, AstI32, AstI64, AstI8 } from "./ast/declaration/type/int";
import { AstU16, AstU32, AstU64, AstU8 } from "./ast/declaration/type/uint";
import { AstNull } from "./ast/declaration/type/null";
import { CstVariableDeclaration } from "./cst/variable-declaration";
import { AstVariable } from "./ast/declaration/variable";
import { CstBlockStatement } from "./cst/block-statement";
import { CstIfStatement } from "./cst/if-statement";
import { AstIf } from "./ast/if";
import { AstExpression } from "./ast/expression";
import { CstWhileStatement } from "./cst/while-statement";
import { AstWhile } from "./ast/while";
import { CstContinueStatement } from "./cst/continue-statement";
import { AstContinue } from "./ast/continue";
import { CstReturnStatement } from "./cst/return-statement";
import { AstReturn } from "./ast/return";
import { AstBreak } from "./ast/break";

export class MotorAstParser extends motorSingleton(MotorParser).getBaseCstVisitorConstructorWithDefaults() {
    constructor() {
        super(motorTokens);
    }

    rightToLeftExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        const left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            const right = this.visit(cst.right[0], parent)
            if(right.type !== left.type) {
                throw new Error('Left and right must be of the same type');
            }
            return new AstBinary(cst.operator[0].image as AstBinaryOperator, left, right);
        }
        return left;
    }

    leftToRightExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        let left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            for (let i = 0; i < cst.right.length; i++) {
                const right = this.visit(cst.right[i], block);
                if(right.type !== left.type) {
                    throw new Error('Left and right must be of the same type');
                }
                left = new AstBinary(cst.operator[i].image as AstBinaryOperator, left, right);
            }
        }
        return left;
    }

    findVariable(block: IAstBlock, identifier: string): AstDeclaration {
        if (block.member[identifier]) {
            return block.member[identifier];
        }
        if (block.parent) {
            return this.findVariable(block.parent, identifier);
        }
        throw new Error(`Variable ${identifier} not found`);
    }

    findLoopBlock(block: IAstBlock): AstWhile {
        if (block instanceof AstWhile) {
            return block;
        }
        if (block.parent) {
            return this.findLoopBlock(block.parent);
        }
        throw new Error('Loop not found');
    }

    findFunctionBlock(block: IAstBlock): AstFunction {
        if (block instanceof AstFunction) {
            return block;
        }
        if (block.parent) {
            return this.findFunctionBlock(block.parent);
        }
        throw new Error('Function not found');
    }

    parenExpression(cst: CstParenExpression['children'], block: IAstBlock): AstStatement {
        return this.visit(cst.expression[0], block);
    }

    atomicExpression(cst: CstAtomicExpression['children'], block: IAstBlock): AstStatement {
        if (cst.variable) {
            return this.findVariable(block, cst.variable[0].image);
        }
        if (cst.const) {
            switch (cst.const[0].tokenType.name) {
                case Float.name:
                    return new AstConstF32(cst.const[0].image);
                case Uint.name:
                    return new AstConstU32(cst.const[0].image);
                case Integer.name:
                    return new AstConstI32(cst.const[0].image);
                case Char.name:
                    return new AstConstChar(cst.const[0].image);
                case Bool.name:
                    return new AstConstBool(cst.const[0].image);
                case Null.name:
                    return new AstConstNull(cst.const[0].image);
                default:
                    throw new Error(`Invalid const type ${cst.const[0].tokenType.name}`);
            }
        }
        if (cst.paren) {
            return this.visit(cst.paren[0], block);
        }
        throw new Error('Invalid atomic expression');
    }

    // indexExpression(cst: CstPostfixExpression['children'], block: AstBlock): AstStatement | AstBinary {
    // }

    callExpression(cst: CstCallExpression['children'], { block, identifier }: { block: IAstBlock, identifier: AstFunction | AstType }): AstCall {
        if (!(identifier instanceof AstFunction) && !(identifier instanceof AstType)) {
            throw new Error('Invalid call expression');
        }
        const args: AstExpression[] = (cst.args ?? []).map(arg => this.visit(arg, block));
        if(identifier instanceof AstFunction) {
            identifier.params.forEach((param, i) => {
                if(!args[i]) {
                    throw new Error(`Argument ${i} is missing`);
                }
                if (param.type !== args[i].type) {
                    throw new Error(`Argument ${i} must be of type ${param.type}`);
                }
            });
        }
        return new AstCall(identifier, args);
    }

    memberExpression(cst: CstMemberExpression['children'], { block, identifier }: { block: IAstBlock, identifier: AstType }): AstMember {
        if (!(identifier instanceof AstType)) {
            throw new Error('Invalid member expression');
        }
        return new AstMember(identifier, cst.identifier[0].image);
    }

    postfixExpression(cst: CstPostfixExpression['children'], block: IAstBlock): AstStatement | AstPostFix {
        let left = this.visit(cst.left[0], block);
        for (let operator of cst.operators ?? []) {
            if ('image' in operator) {
                left = new AstPostFix(operator.image as AstPostfixOperator, left);
            } else {
                left = this.visit(operator, { block, identifier: left });
            }
        }
        return left;
    }

    exponentiationExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.rightToLeftExpression(cst, block);
    }

    unaryExpression(cst: CstUnaryExpression['children'], block: IAstBlock): AstStatement | AstUnary {
        const right = this.visit(cst.right[0], block);
        if (cst.operator) {
            return new AstUnary(cst.operator[0].image as AstUnaryOperator, right);
        }
        return right;
    }

    multiplicativeExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    additiveExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    moveExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    relationExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    equalityExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    lAndExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    xorExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    lOrExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    andExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    orExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.leftToRightExpression(cst, block);
    }

    conditionalExpression(cst: CstConditionalExpression['children'], block: IAstBlock): AstStatement | AstTernary {
        const test = this.visit(cst.test[0], block);
        if (cst.true && cst.false) {
            return new AstTernary(test, this.visit(cst.true[0], block), this.visit(cst.false[0], block));
        }
        return test;
    }

    assignExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstStatement | AstBinary {
        return this.rightToLeftExpression(cst, block);
    }

    continueStatement(cst: CstContinueStatement['children'], block: IAstBlock): AstContinue {
        return new AstContinue(this.findLoopBlock(block));
    }

    breakStatement(cst: CstBlockStatement['children'], block: IAstBlock): AstBreak {
        return new AstBreak(this.findLoopBlock(block));
    }

    returnStatement(cst: CstReturnStatement['children'], block: IAstBlock): AstReturn {
        const fn = this.findFunctionBlock(block);
        const expression: AstExpression = this.visit(cst.expression[0], block);
        if (expression.type !== fn.type) {
            throw new Error('Return type must match function type');
        }
        return new AstReturn(fn, expression);
    }

    blockStatement(cst: CstBlockStatement['children'], parent: IAstBlock): AstBlock {
        return this.visit(cst.block[0], parent);
    }

    typeDeclaration(cst: CstTypeDeclaration['children'], block: IAstBlock): AstType {
        switch (cst.type[0].tokenType.name) {
            case TypeFloat64.name:
                return motorSingleton(AstF64)
            case TypeFloat32.name:
                return motorSingleton(AstF32)
            case TypeFloat16.name:
                return motorSingleton(AstF16)
            case TypeFloat8.name:
                return motorSingleton(AstF8)
            case TypeInt64.name:
                return motorSingleton(AstI64)
            case TypeInt32.name:
                return motorSingleton(AstI32)
            case TypeInt16.name:
                return motorSingleton(AstI16)
            case TypeInt8.name:
                return motorSingleton(AstI8)
            case TypeUint64.name:
                return motorSingleton(AstU64)
            case TypeUint32.name:
                return motorSingleton(AstU32)
            case TypeUint16.name:
                return motorSingleton(AstU16)
            case TypeUint8.name:
                return motorSingleton(AstU8)
            case TypeBool.name:
                return motorSingleton(AstBool)
            case TypeChar.name:
                return motorSingleton(AstChar)
            default:
                return this.findVariable(block, cst.type[0].image) as AstType;
        }
    }

    variableDeclaration(cst: CstVariableDeclaration['children'], block: IAstBlock): AstBinary | void {
        const identifier = cst.identifier[0].image;
        if (block.member[identifier]) {
            throw new Error(`Variable ${identifier} already declared`);
        }
        const type = this.visit(cst.type[0], block);
        const variable = new AstVariable(identifier, type);
        block.member[identifier] = variable;
        if (cst.value) {
            return new AstBinary('=', variable, this.visit(cst.value[0], block));
        }
    }

    functionParamDeclaration(cst: CstVariableDeclaration['children'], block: AstFunction): AstBinary | void {
        this.variableDeclaration(cst, block);
        block.params.push(block.member[cst.identifier[0].image] as AstVariable);
    }

    functionDeclaration(cst: CstFunctionDeclaration['children'], block: IAstBlock): void {
        const identifier = cst.identifier[0].image;
        if (identifier in block.member) {
            throw new Error(`member ${identifier} already declared`);
        }
        const fn = new AstFunction(block, identifier, cst.type ? this.visit(cst.type[0], block) : motorSingleton(AstNull));
        for (const param of cst.params ?? []) {
            const result = this.visit(param, fn);
            if (result) {
                fn.statements.push(result);
            }
        }
        for (const statement of cst.block[0].children.block[0].children.statements ?? []) {
            const result = this.visit(statement, fn);
            if (result) {
                fn.statements.push(result);
            }
        }
        block.member[identifier] = fn;
    }

    ifStatement(cst: CstIfStatement['children'], block: IAstBlock): AstIf {
        const test: AstExpression = this.visit(cst.test[0], block);
        if (test.type !== motorSingleton(AstBool)) {
            throw new Error('If statement test must be a boolean expression');
        }
        const astIf = new AstIf(block, test, cst.false ? this.visit(cst.false[0], block) : undefined);
        for (const statement of cst.true[0].children.block[0].children.statements ?? []) {
            const result = this.visit(statement, astIf);
            if (result) {
                block.statements.push(result);
            }
        }
        return astIf;
    }

    whileStatement(cst: CstWhileStatement['children'], block: IAstBlock) {
        const test: AstExpression = this.visit(cst.test[0], block);
        if (test.type !== motorSingleton(AstBool)) {
            throw new Error('While statement test must be a boolean expression');
        }
        const astWhile = new AstWhile(block, test);
        for (const statement of cst.block[0].children.block[0].children.statements ?? []) {
            const result = this.visit(statement, astWhile);
            if (result) {
                block.statements.push(result);
            }
        }
        return astWhile;
    }

    block(cst: CstBlock['children'], parent?: IAstBlock): AstBlock {
        const block = new AstBlock(parent);
        for (const statement of cst.statements ?? []) {
            const result = this.visit(statement, block);
            if (result) {
                block.statements.push(result);
            }
        }
        return block;
    }
}