import { createToken, ILexingResult, IToken, Lexer } from 'chevrotain';

export const Comment = createToken({ name: 'Comment', pattern: /#[^\n]*\n/, group: Lexer.SKIPPED });
export const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /\s+/, group: Lexer.SKIPPED });
export const Newline = createToken({ name: "Newline", pattern: /\n[ \r]*/ });
export const Indent = createToken({ name: "Indent", pattern: /\n[ \r]+/ });
export const Dedent = createToken({ name: "Dedent", pattern: /\n[ \r]+/ });

export const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z_]\w*/ });

export const Float = createToken({ name: 'Float', pattern: /[+-]?(\d+\.\d+f?|\.\d+f?|\d+f|\d+\.f?)/ });
export const Integer = createToken({ name: 'Integer', pattern: /[+-]?\d+/, longer_alt: Float });
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

export const If = createToken({ name: 'If', pattern: /if/, longer_alt: Identifier });
export const Else = createToken({ name: 'Else', pattern: /else/, longer_alt: Identifier });
export const While = createToken({ name: 'While', pattern: /while/, longer_alt: Identifier });
export const For = createToken({ name: 'For', pattern: /for/, longer_alt: Identifier });
export const In = createToken({ name: 'In', pattern: /in/, longer_alt: Identifier });
export const Break = createToken({ name: 'Break', pattern: /break/, longer_alt: Identifier });
export const Continue = createToken({ name: 'Continue', pattern: /continue/, longer_alt: Identifier });
export const Return = createToken({ name: 'Return', pattern: /return/, longer_alt: Identifier });
export const Function = createToken({ name: 'Function', pattern: /fun/, longer_alt: Identifier });
export const Class = createToken({ name: 'Class', pattern: /class/, longer_alt: Identifier });
export const Try = createToken({ name: 'Try', pattern: /try/, longer_alt: Identifier });
export const Catch = createToken({ name: 'Catch', pattern: /catch/, longer_alt: Identifier });
export const Finally = createToken({ name: 'Finally', pattern: /finally/, longer_alt: Identifier });

export const motorTokens = [
    Comment,
    Newline,
    WhiteSpace,
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class, Try, Catch, Finally,
    Identifier,
];

class MotorLexer extends Lexer {
    tokenize(text: string, initialMode?: string): ILexingResult {
        const result = super.tokenize(text, initialMode);
        const tokens: IToken[] = [];
        let dentStack = [0];
        for(const token of result.tokens) {
            if(token.tokenType.name !== Newline.name) {
                tokens.push(token);
                continue;
            }
            const depth = token.image.length - 1;
            if(depth > dentStack[dentStack.length - 1]) {
                tokens.push({
                    ...token,
                    tokenType: Indent,
                })
                dentStack.push(depth);
            } else if(depth < dentStack[dentStack.length - 1]) {
                while(depth < dentStack[dentStack.length - 1]) {
                    tokens.push({
                        ...token,
                        tokenType: Dedent,
                    })
                    dentStack.pop();
                }
            } else if(tokens[tokens.length - 1]?.tokenType.name !== Newline.name) {
                tokens.push(token);
            }
        }
        return {
            ...result,
            tokens,
        }
    }
}

export const motorLexer = new MotorLexer(motorTokens);
