import { 
    Dedent, 
    Equal, 
    Float, 
    Function, 
    Identifier, 
    Indent, 
    Integer, 
    motorLexer
} from '../src';
describe('Memory', () => {

    test('Lexer', () => {
        const scriptOnTest = `
#this is a comment
fun main
    a = 1
    b = 1.2
c = 2
`;
        const result = motorLexer.tokenize(scriptOnTest)
        console.log(result.tokens.map(token => token.tokenType.name));
        expect(result.tokens[0].tokenType.name).toBe(Function.name);
        expect(result.tokens[1].tokenType.name).toBe(Identifier.name);
        expect(result.tokens[2].tokenType.name).toBe(Indent.name);
        expect(result.tokens[3].tokenType.name).toBe(Identifier.name);
        expect(result.tokens[4].tokenType.name).toBe(Equal.name);
        expect(result.tokens[5].tokenType.name).toBe(Integer.name);
        expect(result.tokens[6].tokenType.name).toBe(Identifier.name);
        expect(result.tokens[7].tokenType.name).toBe(Equal.name);
        expect(result.tokens[8].tokenType.name).toBe(Float.name);
        expect(result.tokens[9].tokenType.name).toBe(Dedent.name);
        expect(result.tokens[10].tokenType.name).toBe(Identifier.name);
        expect(result.tokens[11].tokenType.name).toBe(Equal.name);
        expect(result.tokens[12].tokenType.name).toBe(Integer.name);
    });
});