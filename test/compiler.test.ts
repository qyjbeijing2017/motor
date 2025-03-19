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
import { AstStatement } from '../src/compiler/ast/statement';
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
            console.log(JSON.stringify(ast.toObject()));

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
            console.log(JSON.stringify(ast.toObject()));

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

        })
    })
})
