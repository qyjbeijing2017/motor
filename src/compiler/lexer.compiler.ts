import { createToken, createTokenInstance, ILexingResult, IToken, Lexer } from 'chevrotain';

export const Comment = createToken({ name: 'Comment', pattern: /#[^\n]*?(?=\n)/, group: Lexer.SKIPPED });
export const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: / +/, group: Lexer.SKIPPED });
export const Newline = createToken({ name: "Newline", pattern: /\n[^\n\S]*/ });
export const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z_]\w*/ });
export const Indent = createToken({ name: "Indent", pattern: () => null, line_breaks: false, });
export const Dedent = createToken({ name: "Dedent", pattern: () => null, line_breaks: false, });

export const Float = createToken({ name: 'Float', pattern: /(\d+\.\d+f?|\.\d+f?|\d+f|\d+\.f?)/ });
export const Integer = createToken({ name: 'Integer', pattern: /\d+/, longer_alt: Float });
export const Char = createToken({ name: 'Char', pattern: /'.'/ });
export const String = createToken({ name: 'String', pattern: /".*?"/ });
export const Bool = createToken({ name: 'Bool', pattern: /true|false/, longer_alt: Identifier });

export const LShiftEqual = createToken({ name: 'LShiftEqual', pattern: /<<=/ });
export const RShiftEqual = createToken({ name: 'RShiftEqual', pattern: />>=/ });

export const LessThanEqual = createToken({ name: 'LessThanEqual', pattern: /<=/ });
export const GreaterThanEqual = createToken({ name: 'GreaterThanEqual', pattern: />=/ });
export const EqualEqual = createToken({ name: 'EqualEqual', pattern: /==/ });
export const NotEqual = createToken({ name: 'NotEqual', pattern: /!=/ });
export const AddEqual = createToken({ name: 'AddEqual', pattern: /\+=/ });
export const SubEqual = createToken({ name: 'SubEqual', pattern: /-=/ });
export const MulEqual = createToken({ name: 'MulEqual', pattern: /\*=/ });
export const DivEqual = createToken({ name: 'DivEqual', pattern: /\/=/ });
export const ModEqual = createToken({ name: 'ModEqual', pattern: /%=/ });
export const AndEqual = createToken({ name: 'AndEqual', pattern: /&=/ });
export const OrEqual = createToken({ name: 'OrEqual', pattern: /\|=/ });
export const XorEqual = createToken({ name: 'XorEqual', pattern: /\^=/ });
export const And = createToken({ name: 'And', pattern: /&&/ });
export const Or = createToken({ name: 'Or', pattern: /\|\|/ });
export const LShift = createToken({ name: 'LShift', pattern: /<</ });
export const RShift = createToken({ name: 'RShift', pattern: />>/ });
export const Increment = createToken({ name: 'Increment', pattern: /\+\+/ });
export const Decrement = createToken({ name: 'Decrement', pattern: /--/ });
export const Exponent = createToken({ name: 'Exponent', pattern: /\*\*/ });

export const Equal = createToken({ name: 'Equal', pattern: /=/ });
export const Plus = createToken({ name: 'Plus', pattern: /\+/ });
export const Minus = createToken({ name: 'Minus', pattern: /-/ });
export const Multiply = createToken({ name: 'Multiply', pattern: /\*/ });
export const Divide = createToken({ name: 'Divide', pattern: /\// });
export const Modulo = createToken({ name: 'Modulo', pattern: /%/ });
export const Not = createToken({ name: 'Not', pattern: /!/ });
export const Xor = createToken({ name: 'Xor', pattern: /\^/ });
export const LAnd = createToken({ name: 'LAnd', pattern: /&/ });
export const LOr = createToken({ name: 'LOr', pattern: /\|/ });
export const Tilde = createToken({ name: 'Tilde', pattern: /~/ });
export const Ternary = createToken({ name: 'Ternary', pattern: /\?/ });
export const LessThan = createToken({ name: 'LessThan', pattern: /</ });
export const GreaterThan = createToken({ name: 'GreaterThan', pattern: />/ });
export const LeftParen = createToken({ name: 'LeftParen', pattern: /\(/ });
export const RightParen = createToken({ name: 'RightParen', pattern: /\)/ });
export const LeftBracket = createToken({ name: 'LeftBracket', pattern: /\[/ });
export const RightBracket = createToken({ name: 'RightBracket', pattern: /\]/ });
export const LeftBrace = createToken({ name: 'LeftBrace', pattern: /\{/ });
export const RightBrace = createToken({ name: 'RightBrace', pattern: /\}/ });

export const Comma = createToken({ name: 'Comma', pattern: /,/ });
export const Semicolon = createToken({ name: 'Semicolon', pattern: /;/ });
export const Colon = createToken({ name: 'Colon', pattern: /:/ });
export const Dot = createToken({ name: 'Dot', pattern: /\./ });

export const TypeFloat64 = createToken({ name: 'TypeFloat64', pattern: /float64|double/, longer_alt: Identifier });
export const TypeFloat16 = createToken({ name: 'TypeFloat16', pattern: /float16|half/, longer_alt: Identifier });
export const TypeFloat8 = createToken({ name: 'TypeFloat8', pattern: /float8/, longer_alt: Identifier });
export const TypeFloat32 = createToken({ name: 'TypeFloat32', pattern: /float(32)?/, longer_alt: [Identifier, TypeFloat64, TypeFloat16, TypeFloat8] });
export const TypeInt64 = createToken({ name: 'TypeInt64', pattern: /int64|long/, longer_alt: Identifier });
export const TypeInt16 = createToken({ name: 'TypeInt16', pattern: /int16|short/, longer_alt: Identifier });
export const TypeInt8 = createToken({ name: 'TypeInt8', pattern: /int8/, longer_alt: Identifier });
export const TypeInt32 = createToken({ name: 'TypeInt32', pattern: /int(32)?/, longer_alt: [Identifier, TypeInt64, TypeInt16, TypeInt8] });
export const TypeUint64 = createToken({ name: 'TypeUint64', pattern: /uint64|ulong/, longer_alt: Identifier });
export const TypeUint16 = createToken({ name: 'TypeUint16', pattern: /uint16|ushort/, longer_alt: Identifier });
export const TypeUint8 = createToken({ name: 'TypeUint8', pattern: /uint8|byte/, longer_alt: Identifier });
export const TypeUint32 = createToken({ name: 'TypeUint32', pattern: /uint(32)?/, longer_alt: [Identifier, TypeUint64, TypeUint16, TypeUint8] });
export const TypeBool = createToken({ name: 'TypeBool', pattern: /bool/, longer_alt: Identifier });
export const TypeChar = createToken({ name: 'TypeChar', pattern: /char/, longer_alt: Identifier });
export const TypeString = createToken({ name: 'TypeString', pattern: /string/, longer_alt: Identifier });
export const TypeList = createToken({ name: 'TypeList', pattern: /list/, longer_alt: Identifier });

export const If = createToken({ name: 'If', pattern: /if/, longer_alt: Identifier });
export const Else = createToken({ name: 'Else', pattern: /else/, longer_alt: Identifier });
export const While = createToken({ name: 'While', pattern: /while/, longer_alt: Identifier });
export const For = createToken({ name: 'For', pattern: /for/, longer_alt: Identifier });
export const In = createToken({ name: 'In', pattern: /in/, longer_alt: [Identifier, TypeInt64, TypeInt32, TypeInt16, TypeInt8] });
export const Break = createToken({ name: 'Break', pattern: /break/, longer_alt: Identifier });
export const Continue = createToken({ name: 'Continue', pattern: /continue/, longer_alt: Identifier });
export const Return = createToken({ name: 'Return', pattern: /return/, longer_alt: Identifier });
export const Function = createToken({ name: 'Function', pattern: /fn/, longer_alt: Identifier });
export const Class = createToken({ name: 'Class', pattern: /class/, longer_alt: Identifier });
export const Try = createToken({ name: 'Try', pattern: /try/, longer_alt: Identifier });
export const Catch = createToken({ name: 'Catch', pattern: /catch/, longer_alt: Identifier });
export const Finally = createToken({ name: 'Finally', pattern: /finally/, longer_alt: Identifier });
export const Throw = createToken({ name: 'Throw', pattern: /throw/, longer_alt: Identifier });
export const Struct = createToken({ name: 'Struct', pattern: /struct/, longer_alt: Identifier });
export const Enum = createToken({ name: 'Enum', pattern: /enum/, longer_alt: Identifier });
export const Import = createToken({ name: 'Import', pattern: /import/, longer_alt: Identifier });


export const motorTokens = [
    Comment,
    Newline,
    Indent, Dedent,
    WhiteSpace,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift, Increment, Decrement, Exponent,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Tilde, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    TypeFloat64, TypeFloat16, TypeFloat8, TypeFloat32, TypeInt64, TypeInt16, TypeInt8, TypeInt32, TypeUint64, TypeUint16, TypeUint8, TypeUint32, TypeBool, TypeChar, TypeString, TypeList,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally, Throw, Struct, Enum, Import,
    Identifier,
];

class MotorLexer extends Lexer {
    tokenize(text: string, initialMode?: string): ILexingResult {
        const indentStack = [0];
        const lexResult = super.tokenize(text, initialMode);
        const tokens: IToken[] = [];
        lexResult.tokens.forEach(token => {
            if (token.tokenType.name === Newline.name) {
                const depth = token.image.length - 1;
                if (depth > indentStack[indentStack.length - 1]) {
                    indentStack.push(depth);
                    tokens.push(createTokenInstance(Indent, '', NaN, NaN, NaN, NaN, NaN, NaN));
                } else if (depth < indentStack[indentStack.length - 1]) {
                    while (depth < indentStack[indentStack.length - 1]) {
                        indentStack.pop();
                        tokens.push(createTokenInstance(Dedent, '', NaN, NaN, NaN, NaN, NaN, NaN));
                    }
                }
            } else {
                tokens.push(token);
            }
        })
        while(indentStack.length > 1){
            indentStack.pop();
            tokens.push(createTokenInstance(Dedent, '', NaN, NaN, NaN, NaN, NaN, NaN));
        }
        return {
            ...lexResult,
            tokens,
        };
    }
}

export const motorLexer = new MotorLexer(motorTokens);
