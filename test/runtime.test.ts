import {
    MotorRuntime,
    MotorU8,
    MotorU16,
    MotorU32,
    MotorU64,
    MotorI8,
    MotorI16,
    MotorI32,
    MotorI64,
    MotorF8,
    MotorF16,
    MotorF32,
    MotorF64,
    MotorStack,
    MotorString,
} from '../src';
describe('Runtime Test', () => {
    const runtimeOnTest = new MotorRuntime();
    runtimeOnTest.clear();
    test('Push&Pop Stack', () => {
        runtimeOnTest.pushStack(MotorU8, 1);
        runtimeOnTest.pushStack(MotorU16, 2);
        runtimeOnTest.pushStack(MotorU32, 3);
        runtimeOnTest.pushStack(MotorU64, 4);
        runtimeOnTest.pushStack(MotorI8, -5);
        runtimeOnTest.pushStack(MotorI16, 6);
        runtimeOnTest.pushStack(MotorI32, -7);
        runtimeOnTest.pushStack(MotorI64, 8);
        runtimeOnTest.pushStack(MotorF8, 9.2);
        runtimeOnTest.pushStack(MotorF16, -10.1);
        runtimeOnTest.pushStack(MotorF32, 11.11);
        runtimeOnTest.pushStack(MotorF64, -12.12);
        runtimeOnTest.pushStack(MotorString, 'hello world12345678');
        expect(MotorStack.size - runtimeOnTest.get('stackPointer').js).toBe(
            MotorU8.size +
            MotorU16.size +
            MotorU32.size +
            MotorU64.size +
            MotorI8.size +
            MotorI16.size +
            MotorI32.size +
            MotorI64.size +
            MotorF8.size +
            MotorF16.size +
            MotorF32.size +
            MotorF64.size +
            MotorString.size
        )
        expect(runtimeOnTest.popStack(MotorString)).toBe('hello world12345678');
        expect(runtimeOnTest.popStack(MotorF64)).toBeCloseTo(-12.12);
        expect(runtimeOnTest.popStack(MotorF32)).toBeCloseTo(11.11);
        expect(runtimeOnTest.popStack(MotorF16)).toBeCloseTo(-10.1);
        expect(runtimeOnTest.popStack(MotorF8)).toBeCloseTo(9.0);
        expect(runtimeOnTest.popStack(MotorI64)).toBe(8);
        expect(runtimeOnTest.popStack(MotorI32)).toBe(-7);
        expect(runtimeOnTest.popStack(MotorI16)).toBe(6);
        expect(runtimeOnTest.popStack(MotorI8)).toBe(-5);
        expect(runtimeOnTest.popStack(MotorU64)).toBe(4);
        expect(runtimeOnTest.popStack(MotorU32)).toBe(3);
        expect(runtimeOnTest.popStack(MotorU16)).toBe(2);
        expect(runtimeOnTest.popStack(MotorU8)).toBe(1);
        expect(MotorStack.size - runtimeOnTest.get('stackPointer').js).toBe(0);
    })
})