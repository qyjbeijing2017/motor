import {
    motorLexer, motorTokens,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
} from '../src';
describe('Memory', () => {

    test('Lexer', () => {
        const scriptOnTest = `
#this is a comment

1.2
1f
1.
0.3
.3
5
'a'
"bcd"
true
false

<<=
>>=

<=
>=
==
!=
+=
-=
*=
/=
%=
&=
|=
^=
&&
||
<<
>>

=
+
-
*
/
%
!
^
&
|
?
<
>
(
)
[
]
{
}

,
;
:
.

if
else
while
for
in
break
continue
return
fun
class
try
catch
finally

identifier
`;
        const result = motorLexer.tokenize(scriptOnTest)
        let offset = 0;

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

        expect(result.tokens[offset].tokenType.name).toBe(LShiftEqual.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(RShiftEqual.name);
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

        expect(result.tokens[offset].tokenType.name).toBe(Comma.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Semicolon.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Colon.name);
        offset += 1;
        expect(result.tokens[offset].tokenType.name).toBe(Dot.name);
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

        expect(result.tokens[offset].tokenType.name).toBe(Identifier.name);
        offset += 1;
    });
});