import { CstParser } from "chevrotain";
import {
    Indent, Dedent,
    Integer, Float, Uint, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift, Increment, Decrement,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally, Throw, Struct, Enum, Import, Var,
    TypeFloat64, TypeFloat16, TypeFloat8, TypeFloat32,
    TypeInt64, TypeInt16, TypeInt8, TypeInt32,
    TypeUint64, TypeUint16, TypeUint8, TypeUint32,
    TypeBool, TypeString, TypeList,
    Identifier,
    motorTokens,
    Tilde,
    Exponent,
    Pass,
    ExponentEqual,
    Null,
    Char,
    TypeChar,
} from "./lexer.compiler";

export class MotorParser extends CstParser {
    constructor() {
        super(motorTokens);
        this.performSelfAnalysis();
    }

    parenExpression = this.RULE("parenExpression", () => {
        this.CONSUME(LeftParen);
        this.SUBRULE(this.assignExpression, { LABEL: 'expression' });
        this.CONSUME(RightParen);
    });

    // listExpression = this.RULE("listExpression", () => {
    //     this.CONSUME(LeftBracket);
    //     this.MANY_SEP({
    //         SEP: Comma,
    //         DEF: () => this.SUBRULE(this.assignExpression, { LABEL: 'elements' }),
    //     });
    //     this.CONSUME(RightBracket);
    // });

    atomicExpression = this.RULE("atomicExpression", () => {
        this.OR([
            { ALT: () => this.CONSUME(Float, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Integer, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Uint, { LABEL: 'const' }) },
            // { ALT: () => this.CONSUME(String, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Char, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Bool, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Null, { LABEL: 'const' }) },
            { ALT: () => this.CONSUME(Identifier, { LABEL: 'variable' }) },
            { ALT: () => this.SUBRULE(this.parenExpression, { LABEL: 'paren' }) },
            // { ALT: () => this.SUBRULE(this.listExpression, { LABEL: 'list' }) },
        ]);
    });

    // indexExpression = this.RULE("indexExpression", () => {
    //     this.CONSUME(LeftBracket);
    //     this.SUBRULE(this.assignExpression, { LABEL: 'index' })
    //     this.CONSUME(RightBracket);
    // });

    callExpression = this.RULE("callExpression", () => {
        this.CONSUME(LeftParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => this.SUBRULE(this.assignExpression, { LABEL: 'args' }),
        });
        this.CONSUME(RightParen);
    });

    memberExpression = this.RULE("memberExpression", () => {
        this.CONSUME(Dot);
        this.CONSUME(Identifier, { LABEL: 'identifier' });
    });

    postfixExpression = this.RULE("postfixExpression", () => {
        this.SUBRULE(this.atomicExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.memberExpression, { LABEL: "operators" }) },
                { ALT: () => this.SUBRULE(this.callExpression, { LABEL: "operators" }) },
                // { ALT: () => this.SUBRULE(this.indexExpression, { LABEL: "operators" }) },
                { ALT: () => this.CONSUME(Increment, { LABEL: "operators" }) },
                { ALT: () => this.CONSUME(Decrement, { LABEL: "operators" }) },
            ]);
        });
    });

    exponentiationExpression = this.RULE("exponentiationExpression", () => {
        this.SUBRULE(this.postfixExpression, { LABEL: "left" });
        this.OPTION(() => {
            this.CONSUME(Exponent, { LABEL: "operator" });
            this.SUBRULE1(this.exponentiationExpression, { LABEL: "right" });
        });
    });

    unaryExpression = this.RULE("unaryExpression", () => {
        this.OR([
            {
                ALT: () => {
                    this.CONSUME(Minus, { LABEL: "operator" });
                    this.SUBRULE(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Plus, { LABEL: "operator" });
                    this.SUBRULE1(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Increment, { LABEL: "operator" });
                    this.SUBRULE2(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Decrement, { LABEL: "operator" });
                    this.SUBRULE3(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Not, { LABEL: "operator" });
                    this.SUBRULE4(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.CONSUME(Tilde, { LABEL: "operator" });
                    this.SUBRULE5(this.unaryExpression, { LABEL: "right" });
                }
            },
            {
                ALT: () => {
                    this.SUBRULE5(this.exponentiationExpression, { LABEL: "right" });
                }
            },
        ]);
    });

    multiplicativeExpression = this.RULE("multiplicativeExpression", () => {
        this.SUBRULE(this.unaryExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(Multiply, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(Divide, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(Modulo, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.unaryExpression, { LABEL: "right" });
        });
    });

    additiveExpression = this.RULE("additiveExpression", () => {
        this.SUBRULE(this.multiplicativeExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(Plus, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(Minus, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.multiplicativeExpression, { LABEL: "right" });
        });
    });

    moveExpression = this.RULE("moveExpression", () => {
        this.SUBRULE(this.additiveExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(LShift, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(RShift, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.additiveExpression, { LABEL: "right" });
        });
    });

    relationExpression = this.RULE("relationExpression", () => {
        this.SUBRULE(this.moveExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(GreaterThan, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(GreaterThanEqual, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(LessThan, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(LessThanEqual, { LABEL: "operator" }) }
            ]);
            this.SUBRULE1(this.moveExpression, { LABEL: "right" });
        });
    });

    equalityExpression = this.RULE("equalityExpression", () => {
        this.SUBRULE(this.relationExpression, { LABEL: "left" });
        this.MANY(() => {
            this.OR([
                { ALT: () => this.CONSUME(EqualEqual, { LABEL: "operator" }) },
                { ALT: () => this.CONSUME(NotEqual, { LABEL: "operator" }) },
            ]);
            this.SUBRULE1(this.relationExpression, { LABEL: "right" });
        });
    });

    lAndExpression = this.RULE("lAndExpression", () => {
        this.SUBRULE(this.equalityExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(LAnd, { LABEL: "operator" });
            this.SUBRULE1(this.equalityExpression, { LABEL: "right" });
        });
    });

    xorExpression = this.RULE("xorExpression", () => {
        this.SUBRULE(this.lAndExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(Xor, { LABEL: "operator" });
            this.SUBRULE1(this.lAndExpression, { LABEL: "right" });
        });
    });

    lOrExpression = this.RULE("lOrExpression", () => {
        this.SUBRULE(this.xorExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(LOr, { LABEL: "operator" });
            this.SUBRULE1(this.xorExpression, { LABEL: "right" });
        });
    });

    andExpression = this.RULE("andExpression", () => {
        this.SUBRULE(this.lOrExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(And, { LABEL: "operator" });
            this.SUBRULE1(this.lOrExpression, { LABEL: "right" });
        });
    });

    orExpression = this.RULE("orExpression", () => {
        this.SUBRULE(this.andExpression, { LABEL: "left" });
        this.MANY(() => {
            this.CONSUME(Or, { LABEL: "operator" });
            this.SUBRULE1(this.andExpression, { LABEL: "right" });
        });
    });

    conditionalExpression = this.RULE("conditionalExpression", () => {
        this.SUBRULE(this.orExpression, { LABEL: "test" });
        this.OPTION(() => {
            this.CONSUME(Ternary);
            this.SUBRULE1(this.conditionalExpression, { LABEL: "true" });
            this.CONSUME(Colon);
            this.SUBRULE2(this.conditionalExpression, { LABEL: "false" });
        });
    });

    assignExpression = this.RULE('assignExpression', () => {
        this.SUBRULE(this.conditionalExpression, { LABEL: 'left' });
        this.OPTION(() => {
            this.OR([
                { ALT: () => this.CONSUME(Equal, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(AddEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(SubEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(MulEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(DivEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(ModEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(AndEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(OrEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(XorEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(LShiftEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(RShiftEqual, { LABEL: 'operator' }) },
                { ALT: () => this.CONSUME(ExponentEqual, { LABEL: 'operator' }) },
            ]);
            this.SUBRULE(this.assignExpression, { LABEL: 'right' });
        });
    });

    continueStatement = this.RULE("continueStatement", () => {
        this.CONSUME(Continue);
    });

    breakStatement = this.RULE("breakStatement", () => {
        this.CONSUME(Break);
    });

    returnStatement = this.RULE("returnStatement", () => {
        this.CONSUME(Return);
        this.OPTION(() => this.SUBRULE(this.assignExpression, { LABEL: 'expression' }));
    });

    // throwStatement = this.RULE("throwStatement", () => {
    //     this.CONSUME(Throw);
    //     this.SUBRULE(this.assignExpression, { LABEL: 'expression' });
    // });

    blockStatement = this.RULE('blockStatement', () => {
        this.CONSUME(Indent);
        this.SUBRULE(this.block, { LABEL: 'block' });
        this.CONSUME(Dedent);
    });

    // listTypeDeclaration = this.RULE('listTypeDeclaration', () => {
    //     this.CONSUME(LeftBracket);
    //     // this.OPTION(() => {
    //     //     this.SUBRULE(this.typeDeclaration, { LABEL: 'type' });
    //     //     this.CONSUME(Comma);
    //     //     this.SUBRULE1(this.assignExpression, { LABEL: 'size' });
    //     // });
    //     this.CONSUME(RightBracket);
    // });

    typeDeclaration = this.RULE('typeDeclaration', () => {
        this.OR([
            { ALT: () => this.CONSUME(TypeFloat64, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeFloat32, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeFloat16, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeFloat8, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeInt64, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeInt32, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeInt16, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeInt8, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeUint64, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeUint32, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeUint16, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeUint8, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeBool, { LABEL: 'type' }) },
            // { ALT: () => this.CONSUME(TypeString, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeChar, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(TypeList, { LABEL: 'type' }) },
            { ALT: () => this.CONSUME(Identifier, { LABEL: 'type' }) },
            // { ALT: () => this.SUBRULE(this.listTypeDeclaration, { LABEL: 'list' }) },
        ]);
    });

    variableDeclaration = this.RULE('variableDeclaration', () => {
        this.CONSUME(Var);
        this.CONSUME(Identifier, { LABEL: 'identifier' });
        this.SUBRULE(this.typeDeclaration, { LABEL: 'type' });
        this.OPTION(() => {
            this.CONSUME(Equal);
            this.SUBRULE(this.assignExpression, { LABEL: 'value' });
        });
    });

    functionParamDeclaration = this.RULE('functionParamDeclaration', () => {
        this.CONSUME(Identifier, { LABEL: 'identifier' });
        this.SUBRULE(this.typeDeclaration, { LABEL: 'type' });
    });

    functionDeclaration = this.RULE('functionDeclaration', () => {
        this.CONSUME(Function);
        this.CONSUME(Identifier, { LABEL: 'identifier' });
        this.CONSUME(LeftParen);
        this.MANY_SEP({
            SEP: Comma,
            DEF: () => {
                this.SUBRULE(this.functionParamDeclaration, { LABEL: 'params' });
            },
        });
        this.CONSUME(RightParen);
        this.OPTION(() => this.SUBRULE(this.typeDeclaration, { LABEL: 'type' }));
        this.SUBRULE1(this.blockStatement, { LABEL: 'block' });
    });

    ifStatement = this.RULE('ifStatement', () => {
        this.CONSUME(If);
        this.SUBRULE(this.assignExpression, { LABEL: 'test' });
        this.SUBRULE(this.blockStatement, { LABEL: 'true' });
        this.OPTION(() => {
            this.CONSUME(Else);
            this.OR([
                { ALT: () => this.SUBRULE1(this.blockStatement, { LABEL: 'false' }) },
                { ALT: () => this.SUBRULE(this.ifStatement, { LABEL: 'false' }) },
            ]);
        });
    });

    whileStatement = this.RULE('whileStatement', () => {
        this.CONSUME(While);
        this.SUBRULE(this.assignExpression, { LABEL: 'test' });
        this.SUBRULE(this.blockStatement, { LABEL: 'block' });
    });

    // forStatement = this.RULE('forStatement', () => {
    //     this.CONSUME(For);
    //     this.CONSUME(Identifier, { LABEL: 'identity' });
    //     this.CONSUME(In);
    //     this.SUBRULE(this.assignExpression, { LABEL: 'iterable' });
    //     this.SUBRULE(this.blockStatement, { LABEL: 'block' });
    // });

    block = this.RULE('block', () => {
        this.MANY(() => {
            this.OR([
                { ALT: () => this.SUBRULE(this.assignExpression, { LABEL: 'statements' }) },

                { ALT: () => this.SUBRULE(this.variableDeclaration, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.functionDeclaration, { LABEL: 'statements' }) },

                { ALT: () => this.SUBRULE(this.ifStatement, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.whileStatement, { LABEL: 'statements' }) },
                // { ALT: () => this.SUBRULE(this.forStatement, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.blockStatement, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.returnStatement, { LABEL: 'statements' }) },
                // { ALT: () => this.SUBRULE(this.throwStatement, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.breakStatement, { LABEL: 'statements' }) },
                { ALT: () => this.SUBRULE(this.continueStatement, { LABEL: 'statements' }) },
            ]);
            this.OPTION(() => this.CONSUME(Semicolon));
        });
    });
}
