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
            Dedent, Identifier
        ];
        const result = motorLexer.tokenize(scriptOnTest);
        result.tokens.forEach((token, index) => {
            expect(token.tokenType.name).toBe(tokenExpected[index].name);
        })
    })

    describe('Parser',()=>{
        test('Assign Statement',()=>{
            const scriptOnTest = `
list motorList = [1, 2, 3, 4, 5]
1 + (2 - 3) * 4 / 5 % 6 + motorList[0]
identifier = 1
float[8] identifier = [1.0]
float64 identifier += 1
identifier -= 1
identifier *= 1
identifier /= 1
identifier %= 1
identifier &= 1
identifier |= 1
identifier ^= 1
identifier <<= 1
identifier >>= 1
identifier < 1
identifier > 1
identifier <= 1
identifier >= 1
identifier == 1
identifier != 1
identifier && 1
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('Block Statement',()=>{
            const scriptOnTest = `
noBlock = false
    block1 = true
        block2 = false
blockEnd = true
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('while Statement',()=>{
            const scriptOnTest = `
while true
    block += 1
    break
while false
    block += 2
    continue
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('for Statement',()=>{
            const scriptOnTest = `
motorList = [1, 2, 3, 4, 5]
for i in motorList
    block += i
    continue
for i in motorList
    break
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('condition Statement',()=>{
            const scriptOnTest = `
if true
    block += 1

if false
    block += 2
else
    block += 3

if true
    block += 1
else if false
    block += 2
else
    block += 3
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('ternary Express',()=>{
            const scriptOnTest = `
identifier = true ? 1 : 2
identifier = true ? 1 : false ? 2 : 3
identifier = true ? false ? 1 : 2 : 3
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
        test('function Declaration',()=>{
            const scriptOnTest = `
fn test(param1, param2)
    return param1 + param2
fn add(float32 param1, param2): float32
    return param1 + param2
fn subInt(int32 param1, int32 param2): int32
    return param1 - param2
`
            motorParser.input = motorLexer.tokenize(scriptOnTest).tokens;
            motorParser.input.forEach(token => token.tokenType.name);
            motorParser.program();
            if(motorParser.errors.length > 0){
                console.log(motorParser.errors);
            }
            expect(motorParser.errors.length).toBe(0);
        })
    })
});