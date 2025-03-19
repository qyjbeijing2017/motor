import {
    Integer, Float, Uint, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
    Indent,
    Dedent,
    MotorLexer,
    MotorParser,
    MotorAstParser,
} from '../src';
import { MotorAst } from '../src/compiler/ast/ast';
import { motorSingleton } from '../src/utils/singleton';

describe('Compiler', () => {
    test('Lexer', () => {
        const scriptOnTest = `
1 2. 3.4 5f .6 2u '7' "8" '7' true false
<<= >>=
<= >= == != += -= *= /= %= &= |= ^= && || << >>
= + - * / % ! ^ & | ? < > ( ) [ ] { } 
, ; : .
if else while for in break continue return fn class try catch finally
identifier
    indent
dedent
-1. -2 +3
1+2
# test empty line


`;
        const tokenExpected = [
            Integer, Float, Float, Float, Float, Uint, Char, String, Char, Bool, Bool,
            LShiftEqual, RShiftEqual,
            LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
            Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
            Comma, Semicolon, Colon, Dot,
            If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
            Identifier,
            Indent, Identifier,
            Dedent, Identifier,
            Minus, Float, Minus, Integer, Plus, Integer,
            Integer, Plus, Integer,
        ];
        const result = motorSingleton(MotorLexer).tokenize(scriptOnTest);
        result.tokens.forEach((token, index) => {
            expect(token.tokenType.name).toBe(tokenExpected[index].name);
        })
    })

    describe('Parser', () => {
        const lexer = motorSingleton(MotorLexer);
        const parser = motorSingleton(MotorParser);
        const astParser = motorSingleton(MotorAstParser);

        test('Const', () => {
            const scriptOnTest = `
1 + 2 * 3
`;
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast: MotorAst = astParser.visit(cst);

            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {},
                "statements": [
                    {
                        "astType": "binary",
                        "operator": "+",
                        "left": "1",
                        "right": {
                            "astType": "binary",
                            "operator": "*",
                            "left": "2",
                            "right": "3",
                            "type": "i32"
                        },
                        "type": "i32"
                    }
                ]
            })

        })

        test('Variable', () => {
            const scriptOnTest = `
var a u32 = 1
`;
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast: MotorAst = astParser.visit(cst);
            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {
                    "a": {
                        "astType": "variable",
                        "identifier": "a",
                        "type": "u32"
                    }
                },
                "statements": [
                    {
                        "astType": "binary",
                        "operator": "=",
                        "left": {
                            "astType": "variable",
                            "identifier": "a",
                            "type": "u32"
                        },
                        "right": "1",
                        "type": "u32"
                    }
                ]
            })

        })

        test('Function', () => {
            const scriptOnTest = `
fn add(a u32, b u32) u32
    pass
`;
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast = astParser.visit(cst);
            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {
                    "add": {
                        "astType": "function",
                        "type": "u32",
                        "identifier": "add",
                        "params": [
                            {
                                "astType": "variable",
                                "identifier": "a",
                                "type": "u32"
                            },
                            {
                                "astType": "variable",
                                "identifier": "b",
                                "type": "u32"
                            }
                        ],
                        "member": {
                            "a": {
                                "astType": "variable",
                                "identifier": "a",
                                "type": "u32"
                            },
                            "b": {
                                "astType": "variable",
                                "identifier": "b",
                                "type": "u32"
                            }
                        },
                        "statements": []
                    }
                },
                "statements": []
            })

        })

        test('Function Call', () => {
            const scriptOnTest = `
fn add(a u32, b u32) u32
    return a + b
add(1u, 2u)
`
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast = astParser.visit(cst);
            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {
                    "add": {
                        "astType": "function",
                        "type": "u32",
                        "identifier": "add",
                        "params": [
                            {
                                "astType": "variable",
                                "identifier": "a",
                                "type": "u32"
                            },
                            {
                                "astType": "variable",
                                "identifier": "b",
                                "type": "u32"
                            }
                        ],
                        "member": {
                            "a": {
                                "astType": "variable",
                                "identifier": "a",
                                "type": "u32"
                            },
                            "b": {
                                "astType": "variable",
                                "identifier": "b",
                                "type": "u32"
                            }
                        },
                        "statements": [
                            {
                                "astType": "return",
                                "expression": {
                                    "astType": "binary",
                                    "operator": "+",
                                    "left": {
                                        "astType": "variable",
                                        "identifier": "a",
                                        "type": "u32"
                                    },
                                    "right": {
                                        "astType": "variable",
                                        "identifier": "b",
                                        "type": "u32"
                                    },
                                    "type": "u32"
                                }
                            }
                        ]
                    }
                },
                "statements": [
                    {
                        "astType": "call",
                        "fn": "add",
                        "args": [
                            "1u",
                            "2u"
                        ]
                    }
                ]
            })
        })

        test('If', () => {
            const scriptOnTest = `
if true
    pass
else
    pass
`
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast = astParser.visit(cst);
            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {},
                "statements": [
                    {
                        "astType": "if",
                        "test": "true",
                        "true": {
                            "member": {},
                            "statements": []
                        },
                        "false": {
                            "astType": "block",
                            "member": {},
                            "statements": []
                        }
                    }
                ]
            })
        })

        test('While', () => {
            const scriptOnTest = `
while true
    continue
    if true
        break
`
            const lexingResult = lexer.tokenize(scriptOnTest);
            parser.input = lexingResult.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.error(parser.errors);
                throw `Parser error found ${parser.errors.length} errors`;
            }
            const ast = astParser.visit(cst);
            expect(ast.toObject()).toEqual({
                "astType": "block",
                "member": {},
                "statements": [
                    "continue",
                    {
                        "astType": "if",
                        "test": "true",
                        "true": {
                            "member": {},
                            "statements": []
                        },
                        "false": null
                    },
                    {
                        "astType": "while",
                        "test": "true",
                        "member": {},
                        "statements": [
                            "break"
                        ]
                    }
                ]
            })
        })
    })
})
