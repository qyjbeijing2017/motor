import { createToken, Lexer } from 'chevrotain';

export const Comment = createToken({ name: 'Comment', pattern: /#[^\n]*\n/, group: Lexer.SKIPPED });
export const Indent = createToken({ name: "Indent", pattern: /[ ]+/, group: "whitespace" });
export const Dedent = createToken({ name: "Dedent", pattern: /(?<=\n)[ ]*/, group: "whitespace" });
export const Newline = createToken({ name: "Newline", pattern: /\n/ });
export const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z_]\w*/ });

export const Integer = createToken({ name: 'Integer', pattern: /[+-]?\d+/ });
export const Float = createToken({ name: 'Float', pattern: /[+-]?(\d+\.\d+f?|\.\d+f?|\d+f|\d+\.f?)/ });
export const Char = createToken({ name: 'Char', pattern: /'.'/ });
export const String = createToken({ name: 'String', pattern: /".*?"/ });
export const Bool = createToken({ name: 'Bool', pattern: /true|false/ });

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

export const If = createToken({ name: 'If', pattern: /if/ });
export const Else = createToken({ name: 'Else', pattern: /else/ });
export const While = createToken({ name: 'While', pattern: /while/ });
export const For = createToken({ name: 'For', pattern: /for/ });
export const In = createToken({ name: 'In', pattern: /in/ });
export const Break = createToken({ name: 'Break', pattern: /break/ });
export const Continue = createToken({ name: 'Continue', pattern: /continue/ });
export const Return = createToken({ name: 'Return', pattern: /return/ });
export const Function = createToken({ name: 'Function', pattern: /fnc/ });
export const Class = createToken({ name: 'Class', pattern: /class/ });

export const tokens = [
    Comment, Indent, Dedent, Newline, 
    Integer, Float, Char, String, Bool,
    LShiftEqual, RShiftEqual,
    LessThanEqual, GreaterThanEqual, EqualEqual, NotEqual, AddEqual, SubEqual, MulEqual, DivEqual, ModEqual, AndEqual, OrEqual, XorEqual, And, Or, LShift, RShift,
    Equal, Plus, Minus, Multiply, Divide, Modulo, Not, Xor, LAnd, LOr, Ternary, LessThan, GreaterThan, LeftParen, RightParen, LeftBracket, RightBracket, LeftBrace, RightBrace,
    Comma, Semicolon, Colon, Dot,
    If, Else, While, For, In, Break, Continue, Return, Function, Class,
    Identifier,
];