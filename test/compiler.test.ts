import {
    motorLexer,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
    Indent,
    Dedent,
    motorParser,
    motorCstVisitor,
    AstBlock,
    AstBranch,
    AstClass,
} from '../src';
import { AstTry } from '../src/compiler/ast/try.statement';
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
    // #region AST
    //     describe('AST without type', () => {

    //         function deLoop(ast: AstBlock | AstClass) {
    //             delete ast.parent
    //             if ('statements' in ast)
    //                 ast.statements.forEach((statement) => {
    //                     if (
    //                         statement.astType === 'block' ||
    //                         statement.astType === 'while' ||
    //                         statement.astType === 'function' ||
    //                         statement.astType === 'branch' ||
    //                         statement.astType === 'for' ||
    //                         statement.astType === 'try' ||
    //                         statement.astType === 'class'
    //                     ) {
    //                         deLoop(statement as AstBlock);
    //                     }
    //                 })
    //             Object.keys(ast.members).forEach((key) => {
    //                 if ('parent' in ast.members[key]) {
    //                     deLoop(ast.members[key] as AstBlock);
    //                 }
    //             })
    //             if (ast.astType === 'branch') {
    //                 const branch = (ast as AstBranch);
    //                 if (branch.false)
    //                     deLoop(branch.false);
    //             }
    //             if (ast.astType === 'try') {
    //                 const tryBlock = (ast as AstTry);
    //                 deLoop(tryBlock.catch);
    //                 if (tryBlock.finally)
    //                     deLoop(tryBlock.finally);
    //             }
    //             return ast;
    //         }

    //         test('Const', () => {
    //             const scriptOnTest = `
    // 1 + 2 - 3
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {},
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "binary",
    //                             "left": {
    //                                 "astType": "const",
    //                                 "value": 1,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             },
    //                             "right": {
    //                                 "astType": "const",
    //                                 "value": 2,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             },
    //                             "operator": "+"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": 3,
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "-"
    //                     }
    //                 ]
    //             });
    //         })

    //         test('Variable', () => {
    //             const scriptOnTest = `
    // a = 1
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "a"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": 1,
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "="
    //                     }
    //                 ]
    //             });
    //         })

    //         test('Conditional', () => {
    //             const scriptOnTest = `
    // a = true ? 1 : 2
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "a"
    //                         },
    //                         "right": {
    //                             "astType": "ternary",
    //                             "condition": {
    //                                 "astType": "const",
    //                                 "value": true,
    //                                 "type": {
    //                                     "typeName": "TypeBool"
    //                                 }
    //                             },
    //                             "true": {
    //                                 "astType": "const",
    //                                 "value": 1,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             },
    //                             "false": {
    //                                 "astType": "const",
    //                                 "value": 2,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             }
    //                         },
    //                         "operator": "="
    //                     }
    //                 ]
    //             });
    //         })

    //         test('Paren', () => {
    //             const scriptOnTest = `
    // a = (1 + 2) * 3
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "a"
    //                         },
    //                         "right": {
    //                             "astType": "binary",
    //                             "left": {
    //                                 "astType": "binary",
    //                                 "left": {
    //                                     "astType": "const",
    //                                     "value": 1,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "right": {
    //                                     "astType": "const",
    //                                     "value": 2,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "operator": "+"
    //                             },
    //                             "right": {
    //                                 "astType": "const",
    //                                 "value": 3,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             },
    //                             "operator": "*"
    //                         },
    //                         "operator": "="
    //                     }
    //                 ]
    //             });
    //         })

    //         test('Postfix', () => {
    //             const scriptOnTest = `
    // a(1,2).b[3]++
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "increment",
    //                         "left": {
    //                             "astType": "index",
    //                             "base": {
    //                                 "astType": "get",
    //                                 "base": {
    //                                     "astType": "call",
    //                                     "base": {
    //                                         "astType": "variable",
    //                                         "identifier": "a"
    //                                     },
    //                                     "params": [
    //                                         {
    //                                             "astType": "const",
    //                                             "value": 1,
    //                                             "type": {
    //                                                 "typeName": "TypeInt32"
    //                                             }
    //                                         },
    //                                         {
    //                                             "astType": "const",
    //                                             "value": 2,
    //                                             "type": {
    //                                                 "typeName": "TypeInt32"
    //                                             }
    //                                         }
    //                                     ]
    //                                 },
    //                                 "identifier": "b"
    //                             },
    //                             "index": {
    //                                 "astType": "const",
    //                                 "value": 3,
    //                                 "type": {
    //                                     "typeName": "TypeInt32"
    //                                 }
    //                             }
    //                         },
    //                         "operator": "++"
    //                     }
    //                 ]
    //             });
    //         })

    //         test('while', () => {
    //             const scriptOnTest = `
    // while true
    //     1 + 2
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast: AstBlock = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {},
    //                 "statements": [
    //                     {
    //                         "astType": "while",
    //                         "members": {},
    //                         "statements": [
    //                             {
    //                                 "astType": "binary",
    //                                 "left": {
    //                                     "astType": "const",
    //                                     "value": 1,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "right": {
    //                                     "astType": "const",
    //                                     "value": 2,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "operator": "+"
    //                             }
    //                         ],
    //                         "test": {
    //                             "astType": "const",
    //                             "value": true,
    //                             "type": {
    //                                 "typeName": "TypeBool"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             })
    //         })

    //         test('function', () => {
    //             const scriptOnTest = `
    // fn a(b: float64): float32
    //     return b
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "function",
    //                         "members": {
    //                             "b": {
    //                                 "astType": "variable",
    //                                 "identifier": "b",
    //                                 "type": {
    //                                     "typeName": "float64",
    //                                     "isList": false
    //                                 }
    //                             }
    //                         },
    //                         "statements": [
    //                             {
    //                                 "astType": "return",
    //                                 "expression": {
    //                                     "astType": "variable",
    //                                     "identifier": "b",
    //                                     "type": {
    //                                         "typeName": "float64",
    //                                         "isList": false
    //                                     }
    //                                 }
    //                             }
    //                         ],
    //                         "identifier": "a",
    //                         "params": [
    //                             {
    //                                 "astType": "variable",
    //                                 "identifier": "b",
    //                                 "type": {
    //                                     "typeName": "float64",
    //                                     "isList": false
    //                                 }
    //                             }
    //                         ],
    //                         "returnType": {
    //                             "typeName": "float32",
    //                             "isList": false
    //                         }
    //                     }
    //                 },
    //                 "statements": []
    //             });
    //         })

    //         test('pass', () => {
    //             const scriptOnTest = `
    // fn a()
    //    pass
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "function",
    //                         "members": {},
    //                         "statements": [],
    //                         "identifier": "a",
    //                         "params": []
    //                     }
    //                 },
    //                 "statements": []
    //             });
    //         })

    //         test('if', () => {
    //             const scriptOnTest = `
    // if true
    //     1 + 2
    // else if false
    //     3 + 4
    // else
    //     5 + 6
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {},
    //                 "statements": [
    //                     {
    //                         "astType": "branch",
    //                         "members": {},
    //                         "statements": [
    //                             {
    //                                 "astType": "binary",
    //                                 "left": {
    //                                     "astType": "const",
    //                                     "value": 1,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "right": {
    //                                     "astType": "const",
    //                                     "value": 2,
    //                                     "type": {
    //                                         "typeName": "TypeInt32"
    //                                     }
    //                                 },
    //                                 "operator": "+"
    //                             }
    //                         ],
    //                         "test": {
    //                             "astType": "const",
    //                             "value": true,
    //                             "type": {
    //                                 "typeName": "TypeBool"
    //                             }
    //                         },
    //                         "false": {
    //                             "astType": "branch",
    //                             "members": {},
    //                             "statements": [
    //                                 {
    //                                     "astType": "binary",
    //                                     "left": {
    //                                         "astType": "const",
    //                                         "value": 3,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     "right": {
    //                                         "astType": "const",
    //                                         "value": 4,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     "operator": "+"
    //                                 }
    //                             ],
    //                             "test": {
    //                                 "astType": "const",
    //                                 "value": false,
    //                                 "type": {
    //                                     "typeName": "TypeBool"
    //                                 }
    //                             },
    //                             "false": {
    //                                 "astType": "block",
    //                                 "members": {},
    //                                 "statements": [
    //                                     {
    //                                         "astType": "binary",
    //                                         "left": {
    //                                             "astType": "const",
    //                                             "value": 5,
    //                                             "type": {
    //                                                 "typeName": "TypeInt32"
    //                                             }
    //                                         },
    //                                         "right": {
    //                                             "astType": "const",
    //                                             "value": 6,
    //                                             "type": {
    //                                                 "typeName": "TypeInt32"
    //                                             }
    //                                         },
    //                                         "operator": "+"
    //                                     }
    //                                 ]
    //                             }
    //                         }
    //                     }
    //                 ]
    //             });
    //         })

    //         test('continue&break', () => {
    //             const scriptOnTest = `
    // a = 1
    // while true
    //     a++
    //     if a % 2 == 0
    //         continue
    //     if a > 10
    //         break
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "a"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": 1,
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "="
    //                     },
    //                     {
    //                         "astType": "while",
    //                         "members": {},
    //                         "statements": [
    //                             {
    //                                 "astType": "increment",
    //                                 "left": {
    //                                     "astType": "variable",
    //                                     "identifier": "a"
    //                                 },
    //                                 "operator": "++"
    //                             },
    //                             {
    //                                 "astType": "branch",
    //                                 "members": {},
    //                                 "statements": [
    //                                     {
    //                                         "astType": "continue"
    //                                     }
    //                                 ],
    //                                 "test": {
    //                                     "astType": "binary",
    //                                     "left": {
    //                                         "astType": "binary",
    //                                         "left": {
    //                                             "astType": "variable",
    //                                             "identifier": "a"
    //                                         },
    //                                         "right": {
    //                                             "astType": "const",
    //                                             "value": 2,
    //                                             "type": {
    //                                                 "typeName": "TypeInt32"
    //                                             }
    //                                         },
    //                                         "operator": "%"
    //                                     },
    //                                     "right": {
    //                                         "astType": "const",
    //                                         "value": 0,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     "operator": "=="
    //                                 },
    //                                 "false": false
    //                             },
    //                             {
    //                                 "astType": "branch",
    //                                 "members": {},
    //                                 "statements": [
    //                                     {
    //                                         "astType": "break"
    //                                     }
    //                                 ],
    //                                 "test": {
    //                                     "astType": "binary",
    //                                     "left": {
    //                                         "astType": "variable",
    //                                         "identifier": "a"
    //                                     },
    //                                     "right": {
    //                                         "astType": "const",
    //                                         "value": 10,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     "operator": ">"
    //                                 },
    //                                 "false": false
    //                             }
    //                         ],
    //                         "test": {
    //                             "astType": "const",
    //                             "value": true,
    //                             "type": {
    //                                 "typeName": "TypeBool"
    //                             }
    //                         }
    //                     }
    //                 ]
    //             });
    //         })

    //         test('for', () => {
    //             const scriptOnTest = `
    // for a in b
    //     a++
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "b": {
    //                         "astType": "variable",
    //                         "identifier": "b"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "for",
    //                         "members": {
    //                             "a": {
    //                                 "astType": "variable",
    //                                 "identifier": "a"
    //                             }
    //                         },
    //                         "statements": [
    //                             {
    //                                 "astType": "increment",
    //                                 "left": {
    //                                     "astType": "variable",
    //                                     "identifier": "a"
    //                                 },
    //                                 "operator": "++"
    //                             }
    //                         ],
    //                         "iterable": {
    //                             "astType": "variable",
    //                             "identifier": "b"
    //                         }
    //                     }
    //                 ]
    //             });
    //         })

    //         test('try', () => {
    //             const scriptOnTest = `
    // try
    //     throw "error"
    // catch e
    //     pass
    // finally
    //     pass
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {},
    //                 "statements": [
    //                     {
    //                         "astType": "try",
    //                         "members": {},
    //                         "statements": [
    //                             {
    //                                 "astType": "throw",
    //                                 "expression": {
    //                                     "astType": "const",
    //                                     "value": "error",
    //                                     "type": {
    //                                         "typeName": "TypeString"
    //                                     }
    //                                 }
    //                             }
    //                         ],
    //                         "catch": {
    //                             "astType": "block",
    //                             "members": {
    //                                 "e": {
    //                                     "astType": "variable",
    //                                     "identifier": "e"
    //                                 }
    //                             },
    //                             "statements": []
    //                         },
    //                         "finally": {
    //                             "astType": "block",
    //                             "members": {},
    //                             "statements": []
    //                         }
    //                     }
    //                 ]
    //             });
    //         })

    //         test('struct', () => {
    //             const scriptOnTest = `
    // struct a
    //     b: float64
    //     c: float32
    //     d: int = 1
    //     e = 1.0
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "struct",
    //                         "identifier": "a",
    //                         "members": {
    //                             "b": {
    //                                 "astType": "variable",
    //                                 "identifier": "b",
    //                                 "type": {
    //                                     "typeName": "float64",
    //                                     "isList": false
    //                                 }
    //                             },
    //                             "c": {
    //                                 "astType": "variable",
    //                                 "identifier": "c",
    //                                 "type": {
    //                                     "typeName": "float32",
    //                                     "isList": false
    //                                 }
    //                             },
    //                             "d": {
    //                                 "astType": "variable",
    //                                 "identifier": "d",
    //                                 "type": {
    //                                     "typeName": "int",
    //                                     "isList": false
    //                                 }
    //                             },
    //                             "e": {
    //                                 "astType": "variable",
    //                                 "identifier": "e"
    //                             }
    //                         }
    //                     }
    //                 },
    //                 "statements": []
    //             });
    //         })

    //         test('enum', () => {
    //             const scriptOnTest = `
    // enum a
    //     b
    //     c = 1
    //     d = 2
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "enum",
    //                         "identifier": "a",
    //                         "members": {
    //                             "b": {
    //                                 "astType": "variable",
    //                                 "identifier": "b"
    //                             },
    //                             "c": {
    //                                 "astType": "variable",
    //                                 "identifier": "c"
    //                             },
    //                             "d": {
    //                                 "astType": "variable",
    //                                 "identifier": "d"
    //                             }
    //                         }
    //                     }
    //                 },
    //                 "statements": []
    //             });
    //         })

    //         test('class', () => {
    //             const scriptOnTest = `
    // class c1
    //     a: float64
    //     b = 1.0
    //     struct s1
    //         pass
    //     class c2
    //         pass
    //     enum e1
    //         pass
    //     fn f1()
    //         pass
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "c1": {
    //                         "astType": "class",
    //                         "members": {
    //                             "a": {
    //                                 "astType": "variable",
    //                                 "identifier": "a",
    //                                 "type": {
    //                                     "typeName": "float64",
    //                                     "isList": false
    //                                 }
    //                             },
    //                             "b": {
    //                                 "astType": "variable",
    //                                 "identifier": "b"
    //                             },
    //                             "s1": {
    //                                 "astType": "struct",
    //                                 "members": {},
    //                                 "identifier": "s1"
    //                             },
    //                             "c2": {
    //                                 "astType": "class",
    //                                 "members": {},
    //                                 "identifier": "c2"
    //                             },
    //                             "e1": {
    //                                 "astType": "enum",
    //                                 "identifier": "e1",
    //                                 "members": {}
    //                             },
    //                             "f1": {
    //                                 "astType": "function",
    //                                 "members": {},
    //                                 "statements": [],
    //                                 "identifier": "f1",
    //                                 "params": []
    //                             }
    //                         },
    //                         "identifier": "c1"
    //                     }
    //                 },
    //                 "statements": []
    //             });
    //         })

    //         test('list', () => {
    //             const scriptOnTest = `
    // a = []
    // b = [1,2,3]
    // c = [[1,2],[3,4]]
    // `
    //             const result = motorLexer.tokenize(scriptOnTest);
    //             motorParser.input = result.tokens;
    //             if (motorParser.errors.length) {
    //                 console.log(motorParser.errors);
    //             }
    //             expect(motorParser.errors.length).toBe(0);
    //             const cst = motorParser.block();
    //             const ast = motorCstVisitor.visit(cst);
    //             expect(deLoop(ast)).toEqual({
    //                 "astType": "block",
    //                 "members": {
    //                     "a": {
    //                         "astType": "variable",
    //                         "identifier": "a"
    //                     },
    //                     "b": {
    //                         "astType": "variable",
    //                         "identifier": "b"
    //                     },
    //                     "c": {
    //                         "astType": "variable",
    //                         "identifier": "c"
    //                     }
    //                 },
    //                 "statements": [
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "a"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": {
    //                                 "astType": "list",
    //                                 "elements": []
    //                             },
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "="
    //                     },
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "b"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": {
    //                                 "astType": "list",
    //                                 "elements": [
    //                                     {
    //                                         "astType": "const",
    //                                         "value": 1,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     {
    //                                         "astType": "const",
    //                                         "value": 2,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     {
    //                                         "astType": "const",
    //                                         "value": 3,
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "="
    //                     },
    //                     {
    //                         "astType": "binary",
    //                         "left": {
    //                             "astType": "variable",
    //                             "identifier": "c"
    //                         },
    //                         "right": {
    //                             "astType": "const",
    //                             "value": {
    //                                 "astType": "list",
    //                                 "elements": [
    //                                     {
    //                                         "astType": "const",
    //                                         "value": {
    //                                             "astType": "list",
    //                                             "elements": [
    //                                                 {
    //                                                     "astType": "const",
    //                                                     "value": 1,
    //                                                     "type": {
    //                                                         "typeName": "TypeInt32"
    //                                                     }
    //                                                 },
    //                                                 {
    //                                                     "astType": "const",
    //                                                     "value": 2,
    //                                                     "type": {
    //                                                         "typeName": "TypeInt32"
    //                                                     }
    //                                                 }
    //                                             ]
    //                                         },
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     },
    //                                     {
    //                                         "astType": "const",
    //                                         "value": {
    //                                             "astType": "list",
    //                                             "elements": [
    //                                                 {
    //                                                     "astType": "const",
    //                                                     "value": 3,
    //                                                     "type": {
    //                                                         "typeName": "TypeInt32"
    //                                                     }
    //                                                 },
    //                                                 {
    //                                                     "astType": "const",
    //                                                     "value": 4,
    //                                                     "type": {
    //                                                         "typeName": "TypeInt32"
    //                                                     }
    //                                                 }
    //                                             ]
    //                                         },
    //                                         "type": {
    //                                             "typeName": "TypeInt32"
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             "type": {
    //                                 "typeName": "TypeInt32"
    //                             }
    //                         },
    //                         "operator": "="
    //                     }
    //                 ]
    //             });
    //         })
    //     })
    // #endregion

    describe('AST with type', () => {

        function deLoop(ast: AstBlock | AstClass) {
            delete ast.parent
            if ('statements' in ast)
                ast.statements.forEach((statement) => {
                    if (
                        statement.astType === 'block' ||
                        statement.astType === 'while' ||
                        statement.astType === 'function' ||
                        statement.astType === 'branch' ||
                        statement.astType === 'for' ||
                        statement.astType === 'try' ||
                        statement.astType === 'class'
                    ) {
                        deLoop(statement as AstBlock);
                    }
                })
            Object.keys(ast.members).forEach((key) => {
                if ('parent' in ast.members[key]) {
                    deLoop(ast.members[key] as AstBlock);
                }
            })
            if (ast.astType === 'branch') {
                const branch = (ast as AstBranch);
                if (branch.false)
                    deLoop(branch.false);
            }
            if (ast.astType === 'try') {
                const tryBlock = (ast as AstTry);
                deLoop(tryBlock.catch);
                if (tryBlock.finally)
                    deLoop(tryBlock.finally);
            }
            return ast;
        }

        test('define', () => {
            const scriptOnTest = `
a
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            const cst = motorParser.block();
            if (motorParser.errors.length) {
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
            const ast = motorCstVisitor.visit(cst);
            console.log(JSON.stringify(deLoop(ast)));

        })
    })
})
