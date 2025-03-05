import { CstParser } from "chevrotain";
import {
    Newline, Indent, Dedent,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
    motorTokens,
} from "./lexer.compiler";

class MotorParser extends CstParser {
    constructor() {
        super(motorTokens);
        this.performSelfAnalysis();
    }

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

    atomicExpression = this.RULE("atomicExpression", () => {
        this.OR([
            {
                ALT: () => {
                    this.OPTION(() => this.SUBRULE(this.signedOperator));
                    this.CONSUME(Float)
                }
            },
            {
                ALT: () => {
                    this.OPTION1(() => this.SUBRULE1(this.signedOperator));
                    this.CONSUME(Integer)
                }
            },
            { ALT: () => this.CONSUME(Char) },
            { ALT: () => this.CONSUME(Bool) },
            { ALT: () => this.CONSUME(String) },
            {
                ALT: () => {
                    this.OPTION2(() => this.SUBRULE2(this.signedOperator));
                    this.CONSUME(Identifier)
                }
            },
            { ALT: () => this.SUBRULE(this.parenExpression) }
        ]);
    });

    expression = this.RULE('expression', () => {
        this.SUBRULE(this.atomicExpression);
        this.MANY(() => {
            this.OR1([
                { ALT: () => this.SUBRULE1(this.signedOperator) },
                { ALT: () => this.SUBRULE1(this.operator) },
            ]);
            this.SUBRULE1(this.atomicExpression);
        });
    });

    assignExpression = this.RULE('assignExpression', () => {
        this.CONSUME(Identifier);
        this.OPTION(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.assignOperator) },
                { ALT: () => this.SUBRULE(this.signedOperator) },
                { ALT: () => this.SUBRULE(this.operator) },
            ]);
            this.SUBRULE(this.expression);
        });

    });

    blockExpression = this.RULE('blockExpression', () => {
        this.CONSUME(Indent);
        this.SUBRULE(this.program);
        this.CONSUME(Dedent);
    });

    program = this.RULE('program', () => {
        this.MANY(() => {
            this.OPTION(() => this.OR([
                { ALT: () => this.SUBRULE(this.assignExpression) },
                { ALT: () => this.SUBRULE(this.blockExpression) },
            ]));
            this.OR1([
                { ALT: () => this.CONSUME(Newline) },
                { ALT: () => this.CONSUME(Semicolon) },
            ]);
        });
    });
}

export const motorParser = new MotorParser();