import {
    Bool, Char, Float, Integer, motorTokens, Null,
    TypeFloat64, TypeFloat16, TypeFloat8, TypeFloat32, TypeInt64, TypeInt16, TypeInt8, TypeInt32, TypeUint64, TypeUint16, TypeUint8, TypeUint32, TypeBool, TypeChar, TypeString, TypeList, Uint
} from "./lexer.compiler";
import { MotorParser } from "./parser.compiler";
import { motorSingleton } from "../utils/singleton";
import { CstBlock } from "./cst/block";
import { CstConditionalExpression } from "./cst/conditional-expression";
import { CstLeftToRightExpression } from "./cst/left-to-right-expression";
import { CstUnaryExpression } from "./cst/unary-expression";
import { CstRightToLeftExpression } from "./cst/right-to-left-expression";
import { CstPostfixExpression } from "./cst/postfix-expression";
import { CstMemberExpression } from "./cst/member-expression";
import { CstCallExpression } from "./cst/call-expression";
import { CstAtomicExpression } from "./cst/atomic-expression";
import { CstParenExpression } from "./cst/paren-expression";
import { CstFunctionDeclaration } from "./cst/function-declaration";
import { CstTypeDeclaration } from "./cst/type-declaration";
import { CstVariableDeclaration } from "./cst/variable-declaration";
import { CstBlockStatement } from "./cst/block-statement";
import { CstIfStatement } from "./cst/if-statement";
import { CstWhileStatement } from "./cst/while-statement";
import { CstContinueStatement } from "./cst/continue-statement";
import { CstReturnStatement } from "./cst/return-statement";
import { IAstBlock } from "./ast/block.interface";
import { AstExpression } from "./ast/expression/expression";
import { AstBinary } from "./ast/expression/binary";
import { AstDeclaration } from "./ast/expression/declaration";
import { AstConstF32 } from "./ast/expression/const/float";
import { AstConstU32 } from "./ast/expression/const/uint";
import { AstConstI32 } from "./ast/expression/const/int";
import { AstConstChar } from "./ast/expression/const/char";
import { AstConstBool } from "./ast/expression/const/bool";
import { AstConstNull } from "./ast/expression/const/null";
import { AstF16, AstF32, AstF64, AstF8 } from "./ast/type/float";
import { AstType } from "./ast/type/type";
import { AstI16, AstI32, AstI64, AstI8 } from "./ast/type/int";
import { AstU16, AstU32, AstU64, AstU8 } from "./ast/type/uint";
import { AstBool } from "./ast/type/bool";
import { AstChar } from "./ast/type/char";
import { AstCall } from "./ast/expression/call";
import { AstMember } from "./ast/expression/member";
import { AstPostFix } from "./ast/expression/postfix";
import { AstUnary } from "./ast/expression/unary";
import { AstTernary } from "./ast/expression/ternary";
import { AstWhile } from "./ast/loop/while";
import { AstIf } from "./ast/if";
import { AstContinue } from "./ast/loop/continue";
import { AstBreak } from "./ast/loop/break";
import { AstReturn } from "./ast/return";
import { AstBlock } from "./ast/block";
import { AstFunction } from "./ast/type/function";
import { AstNull } from "./ast/type/null";

export class MotorAstParser extends motorSingleton(MotorParser).getBaseCstVisitorConstructorWithDefaults() {
    constructor() {
        super(motorTokens);
    }

    rightToLeftExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstExpression {
        const left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            const right = this.visit(cst.right[0], parent)
            if (right.type !== left.type) {
                throw new Error('Left and right must be of the same type');
            }
            return new AstBinary(left, right, cst.operator[0].image, block);
        }
        return left;
    }

    leftToRightExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        let left = this.visit(cst.left[0], block);
        if (cst.right && cst.operator) {
            for (let i = 0; i < cst.right.length; i++) {
                const right = this.visit(cst.right[i], block);
                if (right.type !== left.type) {
                    throw new Error('Left and right must be of the same type');
                }
                left = new AstBinary(left, right, cst.operator[i].image, block);
            }
        }
        return left;
    }

    parenExpression(cst: CstParenExpression['children'], block: IAstBlock): AstExpression {
        return this.visit(cst.expression[0], block);
    }

    atomicExpression(cst: CstAtomicExpression['children'], block: IAstBlock): AstExpression {
        if (cst.variable) {
            return AstDeclaration.get(cst.variable[0].image, block);
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

    callExpression(cst: CstCallExpression['children'], { block, identifier }: { block: IAstBlock, identifier: AstExpression }): AstCall {
        const args: AstExpression[] = (cst.args ?? []).map(arg => this.visit(arg, block));
        return new AstCall(identifier, args, block);
    }

    memberExpression(cst: CstMemberExpression['children'], { block, identifier }: { block: IAstBlock, identifier: AstExpression }): AstMember {
        return new AstMember(identifier, cst.identifier[0].image, block);
    }

    postfixExpression(cst: CstPostfixExpression['children'], block: IAstBlock): AstExpression {
        let left = this.visit(cst.left[0], block);
        for (let operator of cst.operators ?? []) {
            if ('image' in operator) {
                left = new AstPostFix(left, operator.image);
            } else {
                left = this.visit(operator, { block, identifier: left });
            }
        }
        return left;
    }

    exponentiationExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstExpression {
        return this.rightToLeftExpression(cst, block);
    }

    unaryExpression(cst: CstUnaryExpression['children'], block: IAstBlock): AstExpression {
        const right = this.visit(cst.right[0], block);
        if (cst.operator) {
            return new AstUnary(cst.operator[0].image, right);
        }
        return right;
    }

    multiplicativeExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    additiveExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    moveExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    relationExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    equalityExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    lAndExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    xorExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    lOrExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    andExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    orExpression(cst: CstLeftToRightExpression['children'], block: IAstBlock): AstExpression {
        return this.leftToRightExpression(cst, block);
    }

    conditionalExpression(cst: CstConditionalExpression['children'], block: IAstBlock): AstExpression {
        const test = this.visit(cst.test[0], block);
        if (cst.true && cst.false) {
            return new AstTernary(test, this.visit(cst.true[0], block), this.visit(cst.false[0], block));
        }
        return test;
    }

    assignExpression(cst: CstRightToLeftExpression['children'], block: IAstBlock): AstExpression {
        return this.rightToLeftExpression(cst, block);
    }

    continueStatement(cst: CstContinueStatement['children'], block: IAstBlock): AstContinue {
        return new AstContinue(block);
    }

    breakStatement(cst: CstBlockStatement['children'], block: IAstBlock): AstBreak {
        return new AstBreak(block);
    }

    returnStatement(cst: CstReturnStatement['children'], block: IAstBlock): AstReturn {
        return new AstReturn(cst.expression ? this.visit(cst.expression[0], block) : null, block);
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
                const type = AstType.findTypeByName(cst.type[0].image, block);
                if (type) {
                    return type;
                }
                throw new Error(`Type ${cst.type[0].image} not found`);
        }
    }

    variableDeclaration(cst: CstVariableDeclaration['children'], block: IAstBlock): AstDeclaration {
        return new AstDeclaration(cst.identifier[0].image, this.visit(cst.type[0]), cst.value ? this.visit(cst.value[0]) : null, block)
    }

    functionParamDeclaration(cst: CstVariableDeclaration['children'], fn: AstFunction): AstDeclaration {
        const identifier = cst.identifier[0].image;
        const variable = new AstDeclaration(identifier, this.visit(cst.type[0]), undefined, fn);
        if (!fn.params) {
            fn.params = [];
        }
        fn.params.push(variable.type);
        return variable;
    }

    functionDeclaration(cst: CstFunctionDeclaration['children'], block: IAstBlock): AstDeclaration {
        const identifier = cst.identifier[0].image;
        const fn = new AstFunction(identifier, cst.type ? this.visit(cst.type[0], block) : motorSingleton(AstNull), block);
        if (block.members && identifier in block.members) {
            throw new Error(`member ${identifier} already declared`);
        }

        for (const param of cst.params ?? []) {
            this.visit(param, fn);
        }
        for (const statement of cst.block[0].children.block[0].children.statements ?? []) {
            const result = this.visit(statement, fn);
            if (result) {
                fn.statements.push(result);
            }
        }
        if (!block.members) {
            block.members = {};
        }
        return new AstDeclaration(identifier, fn, undefined, block);
    }

    ifStatement(cst: CstIfStatement['children'], block: IAstBlock): AstIf {
        const astIf = new AstIf(this.visit(cst.test[0], block), this.visit(cst.true[0], block), cst.false ? this.visit(cst.false[0], block) : undefined, block);
        return astIf;
    }

    whileStatement(cst: CstWhileStatement['children'], block: IAstBlock) {
        const astWhile = new AstWhile(this.visit(cst.test[0], block), this.visit(cst.block[0], block), block);
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