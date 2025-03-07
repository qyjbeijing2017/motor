import { CstParser, Option } from "chevrotain";
import {
    Newline, Indent, Dedent,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally, Throw, Struct, Enum, Import,
    TypeFloat64, TypeFloat16, TypeFloat8, TypeFloat32,
    TypeInt64, TypeInt16, TypeInt8, TypeInt32,
    TypeUint64, TypeUint16, TypeUint8, TypeUint32,
    TypeBool, TypeChar, TypeString, TypeList,
    Identifier,
    motorTokens,
} from "./lexer.compiler";

class MotorParser extends CstParser {
    constructor() {
        super(motorTokens);
        this.performSelfAnalysis();
    }

    keyExpression = this.RULE('keyExpression', () => {
        this.CONSUME(Dot);
        this.CONSUME(Identifier);
    });

    indexExpression = this.RULE('indexExpression', () => {
        this.CONSUME(LeftBracket);
        this.SUBRULE(this.expression);
        this.CONSUME(RightBracket);
    });

    identityExpression = this.RULE('identityExpression', () => {
        this.CONSUME(Identifier);
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.keyExpression) },
                { ALT: () => this.SUBRULE(this.indexExpression) },
            ]);
        });
    });

    listExpression = this.RULE('list', () => {
        this.CONSUME(LeftBracket);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.expression);
            }
        });
        this.CONSUME(RightBracket);
    });

    parenExpression = this.RULE("parenExpression", () => {
        this.CONSUME(LeftParen);
        this.SUBRULE(this.expression, { LABEL: "expression" });
        this.CONSUME(RightParen);
    });

    assignOperator = this.RULE('assignOperator', () => {
        this.OR([
            { ALT: () => this.CONSUME(LShiftEqual) },
            { ALT: () => this.CONSUME(RShiftEqual) },
            { ALT: () => this.CONSUME(AddEqual) },
            { ALT: () => this.CONSUME(SubEqual) },
            { ALT: () => this.CONSUME(MulEqual) },
            { ALT: () => this.CONSUME(DivEqual) },
            { ALT: () => this.CONSUME(ModEqual) },
            { ALT: () => this.CONSUME(AndEqual) },
            { ALT: () => this.CONSUME(OrEqual) },
            { ALT: () => this.CONSUME(XorEqual) },
            { ALT: () => this.CONSUME(Equal) },
        ]);
    });

    signedOperator = this.RULE('signedOperator', () => {
        this.OR([
            { ALT: () => this.CONSUME(Plus) },
            { ALT: () => this.CONSUME(Minus) },
        ]);
    });

    operator = this.RULE('operator', () => {
        this.OR([

            { ALT: () => this.CONSUME(LAnd) },
            { ALT: () => this.CONSUME(LOr) },
            { ALT: () => this.CONSUME(Xor) },
            { ALT: () => this.CONSUME(LShift) },
            { ALT: () => this.CONSUME(RShift) },

            { ALT: () => this.CONSUME(LessThan) },
            { ALT: () => this.CONSUME(GreaterThan) },
            { ALT: () => this.CONSUME(LessThanEqual) },
            { ALT: () => this.CONSUME(GreaterThanEqual) },
            { ALT: () => this.CONSUME(EqualEqual) },
            { ALT: () => this.CONSUME(NotEqual) },
            { ALT: () => this.CONSUME(And) },
            { ALT: () => this.CONSUME(Or) },

            { ALT: () => this.CONSUME(Multiply) },
            { ALT: () => this.CONSUME(Divide) },
            { ALT: () => this.CONSUME(Modulo) },
            { ALT: () => this.CONSUME(Not) },
        ]);
    });

    signedExpression = this.RULE('signedExpression', () => {
        this.OPTION(() => this.SUBRULE(this.signedOperator));
        this.OR([
            { ALT: () => this.CONSUME(Integer) },
            { ALT: () => this.CONSUME(Float) },
            { ALT: () => this.SUBRULE(this.identityExpression) },
            { ALT: () => this.SUBRULE(this.parenExpression) },
            { ALT: () => this.SUBRULE(this.listExpression) }
        ]);
    });

    atomicExpression = this.RULE("atomicExpression", () => {
        this.OR([
            { ALT: () => this.CONSUME(Char) },
            { ALT: () => this.CONSUME(Bool) },
            { ALT: () => this.CONSUME(String) },
            { ALT: () => this.SUBRULE(this.signedExpression) },
        ]);
    });

    baseExpression = this.RULE('baseExpression', () => {
        this.SUBRULE(this.atomicExpression);
        this.MANY(() => {
            this.OR1([
                { ALT: () => this.SUBRULE1(this.signedOperator) },
                { ALT: () => this.SUBRULE1(this.operator) },
            ]);
            this.SUBRULE1(this.atomicExpression);
        });
    });

    conditionExpression = this.RULE('conditionExpression', () => {
        this.SUBRULE(this.baseExpression);
        this.OPTION(() => {
            this.CONSUME(Ternary);
            this.SUBRULE1(this.expression);
            this.CONSUME(Colon);
            this.SUBRULE2(this.expression);
        });
    });

    expression = this.RULE('expression', () => {
        this.SUBRULE(this.conditionExpression);
    });

    typeDefineExpression = this.RULE('typeDefineExpression', () => {
        this.OR([
            { ALT: () => this.CONSUME(Identifier) },

            { ALT: () => this.CONSUME(TypeFloat64) },
            { ALT: () => this.CONSUME(TypeFloat32) },
            { ALT: () => this.CONSUME(TypeFloat16) },
            { ALT: () => this.CONSUME(TypeFloat8) },

            { ALT: () => this.CONSUME(TypeInt64) },
            { ALT: () => this.CONSUME(TypeInt32) },
            { ALT: () => this.CONSUME(TypeInt16) },
            { ALT: () => this.CONSUME(TypeInt8) },

            { ALT: () => this.CONSUME(TypeUint64) },
            { ALT: () => this.CONSUME(TypeUint32) },
            { ALT: () => this.CONSUME(TypeUint16) },
            { ALT: () => this.CONSUME(TypeUint8) },

            { ALT: () => this.CONSUME(TypeBool) },
            { ALT: () => this.CONSUME(TypeChar) },
            { ALT: () => this.CONSUME(TypeString) },
            { ALT: () => this.CONSUME(TypeList) },
        ]);
        this.OPTION(() => {
            this.CONSUME(LeftBracket);
            this.SUBRULE(this.expression);
            this.CONSUME(RightBracket);
        });
    });

    identityDefineExpression = this.RULE('identityDefineExpression', () => {
        this.CONSUME(Identifier);
        this.OPTION(() => {
            this.CONSUME(Colon);
            this.SUBRULE(this.typeDefineExpression)
        });
    });

    assignStatement = this.RULE('assignStatement', () => {
        this.OPTION1(() => {
            this.SUBRULE(this.identityDefineExpression);
            this.OR([
                { ALT: () => this.SUBRULE(this.assignOperator) },
                { ALT: () => this.SUBRULE(this.signedOperator) },
                { ALT: () => this.SUBRULE(this.operator) },
            ]);
        });
        this.SUBRULE(this.expression);
    });

    blockStatement = this.RULE('blockStatement', () => {
        this.CONSUME(Indent);
        this.SUBRULE(this.program);
        this.CONSUME(Dedent);
    });

    whileStatement = this.RULE('whileStatement', () => {
        this.CONSUME(While);
        this.SUBRULE(this.expression);
        this.SUBRULE(this.blockStatement);
    });

    forStatement = this.RULE('forStatement', () => {
        this.CONSUME(For);
        this.CONSUME(Identifier);
        this.CONSUME(In);
        this.SUBRULE(this.expression);
        this.SUBRULE(this.blockStatement);
    });

    conditionStatement = this.RULE('conditionStatement', () => {
        this.CONSUME(If);
        this.SUBRULE(this.expression);
        this.SUBRULE(this.blockStatement);
        this.MANY(() => {
            this.CONSUME(Else);
            this.CONSUME1(If);
            this.SUBRULE1(this.expression);
            this.SUBRULE1(this.blockStatement);
        });
        this.OPTION(() => {
            this.CONSUME1(Else);
            this.SUBRULE2(this.blockStatement);
        });
    });

    returnStatement = this.RULE('returnStatement', () => {
        this.CONSUME(Return);
        this.OPTION(() => this.SUBRULE(this.expression));
    });

    throwStatement = this.RULE('throwStatement', () => {
        this.CONSUME(Throw);
        this.SUBRULE(this.expression);
    });

    functionDeclaration = this.RULE('functionDeclaration', () => {
        this.CONSUME(Function);
        this.CONSUME(Identifier);
        this.CONSUME(LeftParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.identityDefineExpression)
        });
        this.CONSUME(RightParen);
        this.OPTION1(() => {
            this.CONSUME1(Colon);
            this.SUBRULE1(this.typeDefineExpression)
        });
        this.SUBRULE(this.blockStatement);
    });

    tryStatement = this.RULE('tryStatement', () => {
        this.CONSUME(Try);
        this.SUBRULE(this.blockStatement);
        this.OPTION(() => {
            this.CONSUME(Catch);
            this.OPTION2(() => this.CONSUME(Identifier));
            this.SUBRULE1(this.blockStatement);
        });
        this.OPTION1(() => {
            this.CONSUME(Finally);
            this.SUBRULE2(this.blockStatement);
        });
    });

    importStatement = this.RULE('importStatement', () => {
        this.CONSUME(Import);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.CONSUME(Identifier)
        });
        this.CONSUME(String);
    });

    structDeclaration = this.RULE('structDeclaration', () => {
        this.CONSUME(Struct);
        this.CONSUME(Identifier);
        this.CONSUME(Indent);
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.assignStatement) },
                // { ALT: () => this.SUBRULE(this.functionDeclaration) },
            ]);
            this.OPTION(() => this.CONSUME(Semicolon));
        });
        this.CONSUME(Dedent);
    });

    classDeclaration = this.RULE('classDeclaration', () => {
        this.CONSUME(Class);
        this.CONSUME(Identifier);
        this.OPTION(() => {
            this.CONSUME(Colon);
            this.CONSUME2(Identifier);
        });
        this.SUBRULE(this.blockStatement);
    });

    enumDeclaration = this.RULE('enumDeclaration', () => {
        this.CONSUME(Enum);
        this.CONSUME(Identifier);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.CONSUME1(Identifier);
                this.OPTION(() => {
                    this.CONSUME(Equal);
                    this.SUBRULE(this.expression);
                });
            }
        });
    });

    statement = this.RULE('statement', () => {
        this.OPTION(() => this.OR([
            { ALT: () => this.SUBRULE(this.assignStatement) },
            { ALT: () => this.SUBRULE(this.blockStatement) },
            { ALT: () => this.SUBRULE(this.whileStatement) },
            { ALT: () => this.SUBRULE(this.forStatement) },
            { ALT: () => this.SUBRULE(this.conditionStatement) },
            { ALT: () => this.SUBRULE(this.returnStatement) },
            { ALT: () => this.SUBRULE(this.functionDeclaration) },
            { ALT: () => this.SUBRULE(this.tryStatement) },
            { ALT: () => this.SUBRULE(this.throwStatement) },
            { ALT: () => this.SUBRULE(this.importStatement) },
            { ALT: () => this.SUBRULE(this.structDeclaration) },
            { ALT: () => this.SUBRULE(this.classDeclaration) },
            { ALT: () => this.SUBRULE(this.enumDeclaration) },
            { ALT: () => this.CONSUME(Break) },
            { ALT: () => this.CONSUME(Continue) },
        ]));
    });

    program = this.RULE('program', () => {
        this.MANY(() => {
            this.SUBRULE(this.statement);
            this.OPTION(() => this.CONSUME(Semicolon));
        });
    });
}

export const motorParser = new MotorParser();