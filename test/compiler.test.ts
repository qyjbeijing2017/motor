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
    test('Lexer', () => {
        const scriptOnTest = `
#this is a comment

1.2 1f 1. 0.3 .3 5 'a' "bcd" true false

<<= >>=

<= >= == != += -= *= /= %= &= |= ^= && || << >>

= + - * / % ! ^ & | ? < > ( ) [ ] { }

, ; : .

if else while for in break continue return fun class try catch finally

identifier
    a = 1
        b = 2
c = 3
`;
        const result = motorLexer.tokenize(scriptOnTest)
        let offset = 0;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Float.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Float.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Float.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Float.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Float.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Integer.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Char.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(String.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Bool.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Bool.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LShiftEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RShiftEqual.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LessThanEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(GreaterThanEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(EqualEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(NotEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(AddEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(SubEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(MulEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(DivEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(ModEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(AndEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(OrEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(XorEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(And.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Or.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LShift.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RShift.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Equal.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Plus.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Minus.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Multiply.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Divide.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Modulo.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Not.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Xor.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LAnd.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LOr.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Ternary.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LessThan.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(GreaterThan.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LeftParen.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RightParen.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LeftBracket.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RightBracket.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(LeftBrace.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RightBrace.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Comma.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Semicolon.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Colon.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Dot.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(If.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Else.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(While.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(For.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(In.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Break.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Continue.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Return.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Function.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Class.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Try.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Catch.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Finally.name);
        offset += 1;

        expect(result.tokens[offset].tokenType.name).toBe(Newline.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Identifier.name);
        offset += 1;

        // indent and dedent

        expect(result.tokens[offset].tokenType.name).toBe(Indent.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Identifier.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Equal.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Integer.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Indent.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Identifier.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Equal.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Integer.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Dedent.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Dedent.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Identifier.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Equal.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Integer.name);
    });

    test('Parser', () => {
        const scriptOnTest = `
# all the expressions below are valid
empty
assign = true
plus + 4
sub - 5
mul * -1. + assign - sub * -plus * (sub - plus)
div / 2.
mod % 3
lShift << 4
rShift >> 5
lOr | 6
lAnd & 7
xOr ^ 8
    # block Start
    and && 9
    or || 10
        # block Start
        lessThan < 13
        greaterThan > 14
        lessThanEqual <= 15
        greaterThanEqual >= 16
        equalEqual == 17
        notEqual != 18
        # block End
    plusEqual += -19
    subEqual -= 20
    mulEqual *= 21
    divEqual /= 22
    modEqual %= 23
    andEqual &= 24
    orEqual |= 25
    xorEqual ^= 26
    lShiftEqual <<= 27
    rShiftEqual >>= 28
    # block End
identity = assign
`
        const result = motorLexer.tokenize(scriptOnTest);
        motorParser.input = result.tokens;
        motorParser.program();
        if(motorParser.errors.length > 0) {
            console.log(motorParser.errors);
        }
        expect(motorParser.errors.length).toBe(0);
    });
});