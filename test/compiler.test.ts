import {
    motorLexer, motorTokens,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
    Indent,
    Dedent,
    Newline,
    motorParser,
    motorAstVisitor,
} from '../src';
describe('Memory', () => {
    test('Lexer', () => {
        const scriptOnTest = `
1 2. 3.4 5f .6 '7' "8" true false
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
            Integer, Float, Float, Float, Float, Char, String, Bool, Bool,
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
        const result = motorLexer.tokenize(scriptOnTest);
        result.tokens.forEach((token, index) => {
            expect(token.tokenType.name).toBe(tokenExpected[index].name);
        })
    })

    describe('Parser', () => {
        test('Assign Expression', () => {
            const scriptOnTest = `
a
b: float64
c: float32
d = 1
e = 1.0
e += 1
e -= 1
e *= 1
e /= 1
e %= 1
e &= 1
e |= 1
e ^= 1
e <<= 1;e >>= 1
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('conditional expression', () => {
            const scriptOnTest = `
b = true ? 1 : 2
c: float64 = true ? false ? 1 : 2 : 3
d = true ? 1 : false ? 2 : 3
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('logic Expression', () => {
            const scriptOnTest = `
b = true || false
c = true && false
d = false ^ true
e = !true
f = true == false
g = true != false
h = true < false
i = true > false
j = true <= false
k = true >= false
f = !false || true && false ^ true == false != true < false > true <= false >= true
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('Bitwise Expression', () => {
            const scriptOnTest = `
b = 1 & 2
c = 1 | 2
d = 1 ^ 2
e = ~1
f = 1 << 2
g = 1 >> 2
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('Math Expression', () => {
            const scriptOnTest = `
b = 1 + 2
c = 1 - 2
d = 1 * 2
e = 1 / 2
f = 1 % 2
g = 1 ** 2
h = 1 + 2 - 3 * 4 / 5 % 6 ** 7
i = 1 + 2 - 3 * 4 / 5 % 6 ** 7 + 8 - 9 * 10 / 11 % 12 ** 13
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('Unary Expression', () => {
            const scriptOnTest = `
b = -1
c = +1
d = ~1
e = !true
f = !false
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`Postfix Expression`, () => {
            const scriptOnTest = `
b = a++
c = a--
d = a[1]
e = a.b
f = b()
g = b(1)
h = b(1, 2)
i = a.b.c
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`Block Statement`, () => {
            const scriptOnTest = `
    b
     # this is block statement depth = 1
     c = 1
            # this is block statement depth = 3
            d = 2
            e
            f
    g
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`loop Statement`, () => {
            const scriptOnTest = `
while true
    a
    for b in a
        continue
    return a
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`if Statement`, () => {
            const scriptOnTest = `
if true
    a
else
    b
if true
    a
else if false
    pass
else
    pass
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`try Statement`, () => {
            const scriptOnTest = `
try
    pass
catch e
    pass
finally
    pass
try
    pass
catch
    pass
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`function Statement`, () => {
            const scriptOnTest = `
fn a()
    pass
fn a(b: float64): float32
    return b
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`struct Statement`, () => {
            const scriptOnTest = `
struct a
    b: float64
    c: float32
    d: int = 1
    e = 1.0
struct a
    pass
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`enum Statement`, () => {
            const scriptOnTest = `
enum a
    b
    c = 1
    d = 2
enum b
    pass
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test(`class Statement`, () => {
            const scriptOnTest = `
class a
    b: float64
    c: float32
    d: int = 1
    e = 1.0
    fn f()
        pass
class b : a
    pass
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
    })

    describe('AST', () => {
        test('Const', () => {
            const scriptOnTest = `
1 + 2 - 3
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            expect(ast).toEqual({
                "astType": "block",
                "variables": {},
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "binary",
                        "left": {
                            "astType": "binary",
                            "left": {
                                "astType": "const",
                                "value": "1",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            },
                            "right": {
                                "astType": "const",
                                "value": "2",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            },
                            "operator": "+"
                        },
                        "right": {
                            "astType": "const",
                            "value": "3",
                            "type": {
                                "typeName": "TypeInt32"
                            }
                        },
                        "operator": "-"
                    }
                ]
            })
        })

        test('Variable', () => {
            const scriptOnTest = `
a = 1
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            expect(ast).toEqual({
                "astType": "block",
                "variables": {
                    "a": {
                        "astType": "variable",
                        "identifier": "a"
                    }
                },
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "binary",
                        "left": {
                            "astType": "variable",
                            "identifier": "a"
                        },
                        "right": {
                            "astType": "const",
                            "value": "1",
                            "type": {
                                "typeName": "TypeInt32"
                            }
                        },
                        "operator": "="
                    }
                ]
            })
        })

        test('Conditional', () => {
            const scriptOnTest = `
a = true ? 1 : 2
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            expect(ast).toEqual({
                "astType": "block",
                "variables": {
                    "a": {
                        "astType": "variable",
                        "identifier": "a"
                    }
                },
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "binary",
                        "left": {
                            "astType": "variable",
                            "identifier": "a"
                        },
                        "right": {
                            "astType": "ternary",
                            "condition": {
                                "astType": "const",
                                "value": "true",
                                "type": {
                                    "typeName": "TypeBool"
                                }
                            },
                            "true": {
                                "astType": "const",
                                "value": "1",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            },
                            "false": {
                                "astType": "const",
                                "value": "2",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            }
                        },
                        "operator": "="
                    }
                ]
            })
        })

        test('Paren', () => {
            const scriptOnTest = `
a = (1 + 2) * 3
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            expect(ast).toEqual({
                "astType": "block",
                "variables": {
                    "a": {
                        "astType": "variable",
                        "identifier": "a"
                    }
                },
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "binary",
                        "left": {
                            "astType": "variable",
                            "identifier": "a"
                        },
                        "right": {
                            "astType": "binary",
                            "left": {
                                "astType": "binary",
                                "left": {
                                    "astType": "const",
                                    "value": "1",
                                    "type": {
                                        "typeName": "TypeInt32"
                                    }
                                },
                                "right": {
                                    "astType": "const",
                                    "value": "2",
                                    "type": {
                                        "typeName": "TypeInt32"
                                    }
                                },
                                "operator": "+"
                            },
                            "right": {
                                "astType": "const",
                                "value": "3",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            },
                            "operator": "*"
                        },
                        "operator": "="
                    }
                ]
            })
        })

        test('Postfix', () => {
            const scriptOnTest = `
a(1,2).b[3]++
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            expect(ast).toEqual({
                "astType": "block",
                "variables": {
                    "a": {
                        "astType": "variable",
                        "identifier": "a"
                    }
                },
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "increment",
                        "left": {
                            "astType": "index",
                            "base": {
                                "astType": "get",
                                "base": {
                                    "astType": "call",
                                    "base": {
                                        "astType": "variable",
                                        "identifier": "a"
                                    },
                                    "params": [
                                        {
                                            "astType": "const",
                                            "value": "1",
                                            "type": {
                                                "typeName": "TypeInt32"
                                            }
                                        },
                                        {
                                            "astType": "const",
                                            "value": "2",
                                            "type": {
                                                "typeName": "TypeInt32"
                                            }
                                        }
                                    ]
                                },
                                "identifier": "b"
                            },
                            "index": {
                                "astType": "const",
                                "value": "3",
                                "type": {
                                    "typeName": "TypeInt32"
                                }
                            }
                        },
                        "operator": "++"
                    }
                ]
            })
        })

        test('while', () => {
            const scriptOnTest = `
while true
    1 + 2
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            // console.log(JSON.stringify(cst));
        })

        test('function', () => {
            const scriptOnTest = `
fn a(b: float64): float32
    return b
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const cst = motorParser.block();
            const ast = motorAstVisitor.visit(cst);
            const astDeLoop = {
                ...ast,
                statements: [
                    {
                        ...ast.statements[0],
                        parent: undefined
                    }
                ]
            }
            console.log(JSON.stringify(astDeLoop));
            expect(astDeLoop).toEqual({
                "astType": "block",
                "variables": {},
                "classes": {},
                "structs": {},
                "functions": {},
                "statements": [
                    {
                        "astType": "function",
                        "variables": {
                            "b": {
                                "astType": "variable",
                                "identifier": "b",
                                "type": {
                                    "typeName": "float64",
                                    "isList": false
                                }
                            }
                        },
                        "classes": {},
                        "structs": {},
                        "functions": {},
                        "statements": [
                            {
                                "astType": "return",
                                "expression": {
                                    "astType": "variable",
                                    "identifier": "b",
                                    "type": {
                                        "typeName": "float64",
                                        "isList": false
                                    }
                                }
                            }
                        ],
                        "identifier": "a",
                        "params": [
                            {
                                "astType": "variable",
                                "identifier": "b",
                                "type": {
                                    "typeName": "float64",
                                    "isList": false
                                }
                            }
                        ]
                    }
                ]
            })
        })

    })
});