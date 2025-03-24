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
    motorSingleton,
    MotorAst,
} from '../src';

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
        const lexer = motorSingleton(MotorLexer)
        const parser = motorSingleton(MotorParser)
        test('Const', () => {
            const scriptOnTest = `
1 + 2 - 3
        `;
            const result = motorSingleton(MotorLexer).tokenize(scriptOnTest);
            const parser = motorSingleton(MotorParser)
            parser.input = result.tokens;
            if (parser.errors.length > 0) {
                console.log(parser.errors);
            }
            expect(parser.errors.length).toBe(0);

            const cst = parser.block();
            const astParser = motorSingleton(MotorAstParser)
            const ast: MotorAst = astParser.visit(cst);
            expect(ast.toJs()).toEqual({
                "statements": [
                    {
                        "left": {
                            "left": {
                                "raw": "1",
                                "type": {
                                    "size": 4,
                                    "name": "i32"
                                }
                            },
                            "right": {
                                "raw": "2",
                                "type": {
                                    "size": 4,
                                    "name": "i32"
                                }
                            },
                            "operator": "+",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        },
                        "right": {
                            "raw": "3",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        },
                        "operator": "-",
                        "type": {
                            "size": 4,
                            "name": "i32"
                        }
                    },
                    {
                        "statements": []
                    }
                ]
            });
        })

        test('Variable', () => {
            const scriptOnTest = `
var a u32 = 1
`;
            const result = lexer.tokenize(scriptOnTest);
            parser.input = result.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.log(parser.errors);
            }
            expect(parser.errors.length).toBe(0);
            const astParser = motorSingleton(MotorAstParser)
            const ast: MotorAst = astParser.visit(cst);
            expect(ast.toJs()).toEqual({
                "members": {
                    "a": {
                        "name": "a",
                        "type": {
                            "size": 4,
                            "name": "u32"
                        },
                        "defaultValue": {
                            "raw": "1",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        }
                    }
                },
                "statements": [
                    {
                        "name": "a",
                        "type": {
                            "size": 4,
                            "name": "u32"
                        },
                        "defaultValue": {
                            "raw": "1",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        }
                    }
                ]
            })
        })

        test('Function', () => {
            const scriptOnTest = `
fn add(a i32, b i32) i32
    return a + b
add(1, 2)
`;
            const result = lexer.tokenize(scriptOnTest);
            parser.input = result.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.log(parser.errors);
            }
            expect(parser.errors.length).toBe(0);
            const astParser = motorSingleton(MotorAstParser)
            const ast: MotorAst = astParser.visit(cst);
            expect(ast.toJs()).toEqual({
                "members": {
                    "add": {
                        "name": "add",
                        "type": {
                            "members": {
                                "a": {
                                    "name": "a",
                                    "type": {
                                        "size": 4,
                                        "name": "i32"
                                    }
                                },
                                "b": {
                                    "name": "b",
                                    "type": {
                                        "size": 4,
                                        "name": "i32"
                                    }
                                }
                            },
                            "size": 4,
                            "name": "add",
                            "returnType": {
                                "size": 4,
                                "name": "i32"
                            },
                            "types": {},
                            "statements": [
                                {
                                    "expression": {
                                        "left": {
                                            "name": "a",
                                            "type": {
                                                "size": 4,
                                                "name": "i32"
                                            }
                                        },
                                        "right": {
                                            "name": "b",
                                            "type": {
                                                "size": 4,
                                                "name": "i32"
                                            }
                                        },
                                        "operator": "+",
                                        "type": {
                                            "size": 4,
                                            "name": "i32"
                                        }
                                    }
                                }
                            ],
                            "params": [
                                {
                                    "size": 4,
                                    "name": "i32"
                                },
                                {
                                    "size": 4,
                                    "name": "i32"
                                }
                            ]
                        }
                    }
                },
                "statements": [
                    {
                        "name": "add",
                        "type": {
                            "members": {
                                "a": {
                                    "name": "a",
                                    "type": {
                                        "size": 4,
                                        "name": "i32"
                                    }
                                },
                                "b": {
                                    "name": "b",
                                    "type": {
                                        "size": 4,
                                        "name": "i32"
                                    }
                                }
                            },
                            "size": 4,
                            "name": "add",
                            "returnType": {
                                "size": 4,
                                "name": "i32"
                            },
                            "types": {},
                            "statements": [
                                {
                                    "expression": {
                                        "left": {
                                            "name": "a",
                                            "type": {
                                                "size": 4,
                                                "name": "i32"
                                            }
                                        },
                                        "right": {
                                            "name": "b",
                                            "type": {
                                                "size": 4,
                                                "name": "i32"
                                            }
                                        },
                                        "operator": "+",
                                        "type": {
                                            "size": 4,
                                            "name": "i32"
                                        }
                                    }
                                }
                            ],
                            "params": [
                                {
                                    "size": 4,
                                    "name": "i32"
                                },
                                {
                                    "size": 4,
                                    "name": "i32"
                                }
                            ]
                        }
                    },
                    {
                        "identifier": {
                            "name": "add",
                            "type": {
                                "members": {
                                    "a": {
                                        "name": "a",
                                        "type": {
                                            "size": 4,
                                            "name": "i32"
                                        }
                                    },
                                    "b": {
                                        "name": "b",
                                        "type": {
                                            "size": 4,
                                            "name": "i32"
                                        }
                                    }
                                },
                                "size": 4,
                                "name": "add",
                                "returnType": {
                                    "size": 4,
                                    "name": "i32"
                                },
                                "types": {},
                                "statements": [
                                    {
                                        "expression": {
                                            "left": {
                                                "name": "a",
                                                "type": {
                                                    "size": 4,
                                                    "name": "i32"
                                                }
                                            },
                                            "right": {
                                                "name": "b",
                                                "type": {
                                                    "size": 4,
                                                    "name": "i32"
                                                }
                                            },
                                            "operator": "+",
                                            "type": {
                                                "size": 4,
                                                "name": "i32"
                                            }
                                        }
                                    }
                                ],
                                "params": [
                                    {
                                        "size": 4,
                                        "name": "i32"
                                    },
                                    {
                                        "size": 4,
                                        "name": "i32"
                                    }
                                ]
                            }
                        },
                        "args": [
                            {
                                "raw": "1",
                                "type": {
                                    "size": 4,
                                    "name": "i32"
                                }
                            },
                            {
                                "raw": "2",
                                "type": {
                                    "size": 4,
                                    "name": "i32"
                                }
                            }
                        ]
                    }
                ]
            })
        })

        test('While', () => {
            const scriptOnTest = `
var index i32 = 0
while true
    pass
`;
            const result = lexer.tokenize(scriptOnTest);
            parser.input = result.tokens;
            const cst = parser.block();
            if (parser.errors.length > 0) {
                console.log(parser.errors);
            }
            expect(parser.errors.length).toBe(0);
            const astParser = motorSingleton(MotorAstParser)
            const ast: MotorAst = astParser.visit(cst);
            expect(ast.toJs()).toEqual({
                "members": {
                    "index": {
                        "name": "index",
                        "type": {
                            "size": 4,
                            "name": "i32"
                        },
                        "defaultValue": {
                            "raw": "0",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        }
                    }
                },
                "statements": [
                    {
                        "name": "index",
                        "type": {
                            "size": 4,
                            "name": "i32"
                        },
                        "defaultValue": {
                            "raw": "0",
                            "type": {
                                "size": 4,
                                "name": "i32"
                            }
                        }
                    },
                    {
                        "test": {
                            "raw": "true",
                            "type": {
                                "size": 1,
                                "name": "bool"
                            }
                        },
                        "block": {
                            "statements": []
                        }
                    }
                ]
            })
        })
    })
})
