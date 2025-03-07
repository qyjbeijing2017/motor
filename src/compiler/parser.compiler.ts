import { CstParser, Option } from "chevrotain";
import {
    Newline, Indent, Dedent,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift, Increment, Decrement,
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

    atomicExpression = this.RULE("atomicExpression", () => {
        this.OR([
            { ALT: () => this.CONSUME(Float) },
            { ALT: () => this.CONSUME(Integer) },
            { ALT: () => this.CONSUME(Char) },
            { ALT: () => this.CONSUME(String) },
            { ALT: () => this.CONSUME(Bool) },
            { ALT: () => this.CONSUME(Identifier) },
        ]);
    });

    unaryExpression = this.RULE("unaryExpression", () => {
        this.OR([
            {
                ALT: () => {
                    this.CONSUME(Minus, { LABEL: "operator" });
                    this.SUBRULE(this.unaryExpression, { LABEL: "argument" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Plus, { LABEL: "operator" });
                    this.SUBRULE1(this.unaryExpression, { LABEL: "argument" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Increment, { LABEL: "operator" });
                    this.SUBRULE2(this.unaryExpression, { LABEL: "argument" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Decrement, { LABEL: "operator" });
                    this.SUBRULE3(this.unaryExpression, { LABEL: "argument" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Not, { LABEL: "operator" });
                    this.SUBRULE4(this.unaryExpression, { LABEL: "argument" });
                }
            },
            {
                ALT: () => {
                    this.SUBRULE5(this.atomicExpression, { LABEL: "argument" });
                }
            }
        ]);
    });

    multiplicativeExpression = this.RULE("multiplicativeExpression", () => {
        this.SUBRULE(this.unaryExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(Multiply, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(Divide, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.multiplicativeExpression, { LABEL: "right" });
        });
    });

    additiveExpression = this.RULE("additiveExpression", () => {
        this.SUBRULE(this.multiplicativeExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(Plus, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(Minus, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.additiveExpression, { LABEL: "right" });
        });
    });

    relationExpression = this.RULE("relationExpression", () => {
        this.SUBRULE(this.additiveExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(GreaterThan, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(GreaterThanEqual, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(LessThan, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(LessThanEqual, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.additiveExpression, { LABEL: "right" });
        });
    });

    equalityExpression = this.RULE("equalityExpression", () => {
        this.SUBRULE(this.relationExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(Equal, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(NotEqual, { LABEL: "operator" }) },
            ]);
            this.SUBRULE1(this.equalityExpression, { LABEL: "right" });
        });
    });

    andExpression = this.RULE("andExpression", () => {
        this.SUBRULE(this.equalityExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(And, { LABEL: "operator" });
            this.SUBRULE1(this.andExpression, { LABEL: "right" });
        });
    });

    xorExpression = this.RULE("xorExpression", () => {
        this.SUBRULE(this.andExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(Xor, { LABEL: "operator" });
            this.SUBRULE1(this.xorExpression, { LABEL: "right" });
        });
    });

    orExpression = this.RULE("orExpression", () => {
        this.SUBRULE(this.xorExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(Or, { LABEL: "operator" });
            this.SUBRULE1(this.orExpression, { LABEL: "right" });
        });
    });

    conditionalExpression = this.RULE("conditionalExpression", () => {
        this.SUBRULE(this.orExpression, { LABEL: "testExpression" });
        this.OPTION(() => {
            this.CONSUME(Ternary);
            this.SUBRULE1(this.conditionalExpression, { LABEL: "trueExpression" });
            this.CONSUME(Colon);
            this.SUBRULE2(this.conditionalExpression, { LABEL: "falseExpression" });
        });
    });

    typeDeclaration = this.RULE('typeDeclaration', () => {
        this.CONSUME(Colon);
        this.OR([
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
            { ALT: () => this.CONSUME(Identifier) },
        ]);
        this.OPTION(() => {
            this.CONSUME(LeftBracket);
            this.CONSUME(RightBracket);
        });
    });

    assignExpression = this.RULE('assignExpression', () => {
        this.CONSUME(Identifier);
        this.OPTION(() => this.SUBRULE(this.typeDeclaration));
        this.OPTION1(() => {
            this.OR([
                { ALT: () => this.CONSUME(Equal) },
                { ALT: () => this.CONSUME(AddEqual) },
                { ALT: () => this.CONSUME(SubEqual) },
                { ALT: () => this.CONSUME(MulEqual) },
                { ALT: () => this.CONSUME(DivEqual) },
                { ALT: () => this.CONSUME(ModEqual) },
                { ALT: () => this.CONSUME(AndEqual) },
                { ALT: () => this.CONSUME(OrEqual) },
                { ALT: () => this.CONSUME(XorEqual) },
                { ALT: () => this.CONSUME(LShiftEqual) },
                { ALT: () => this.CONSUME(RShiftEqual) },
            ]);
            this.SUBRULE(this.conditionalExpression);
        });
    });

    block = this.RULE('block', () => {
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.assignExpression) },
            ]);
            this.OPTION(() => this.CONSUME(Semicolon));
        });
    });
}

export const motorParser = new MotorParser();