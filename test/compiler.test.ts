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
} from '../src';
describe('Memory', () => {
    test('Lexer',()=>{
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

    describe('Parser',()=>{
        test('Assign Expression',()=>{
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
            if(motorParser.errors.length){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('conditional expression',()=>{
            const scriptOnTest = `
b = true ? 1 : 2
c: float64 = true ? false ? 1 : 2 : 3
d = true ? 1 : false ? 2 : 3
`
            const result = motorLexer.tokenize(scriptOnTest);
            motorParser.input = result.tokens;
            motorParser.block();
            if(motorParser.errors.length){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('logic Expression',()=>{
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
            if(motorParser.errors.length){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('Bitwise Expression',()=>{
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
            if(motorParser.errors.length){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })

        test('Math Expression',()=>{
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
            if(motorParser.errors.length){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
    })
});