import {
    QzaRuntime,
    QzaU8,
    QzaU16,
    QzaU32,
    QzaU64,
    QzaI8,
    QzaI16,
    QzaI32,
    QzaI64,
    QzaF8,
    QzaF16,
    QzaF32,
    QzaF64,
    QzaStack,
    QzaString,
} from '../src';
describe('Runtime Test', () => {
    const runtimeOnTest = new QzaRuntime();
    runtimeOnTest.clear();
    test('Push&Pop Stack', () => {
        runtimeOnTest.pushStack(QzaU8, 1);
        runtimeOnTest.pushStack(QzaU16, 2);
        runtimeOnTest.pushStack(QzaU32, 3);
        runtimeOnTest.pushStack(QzaU64, 4);
        runtimeOnTest.pushStack(QzaI8, -5);
        runtimeOnTest.pushStack(QzaI16, 6);
        runtimeOnTest.pushStack(QzaI32, -7);
        runtimeOnTest.pushStack(QzaI64, 8);
        runtimeOnTest.pushStack(QzaF8, 9.2);
        runtimeOnTest.pushStack(QzaF16, -10.1);
        runtimeOnTest.pushStack(QzaF32, 11.11);
        runtimeOnTest.pushStack(QzaF64, -12.12);
        runtimeOnTest.pushStack(QzaString, 'hello world12345678');
        expect(QzaStack.size - runtimeOnTest.get('stackPointer').js).toBe(
            QzaU8.size +
            QzaU16.size +
            QzaU32.size +
            QzaU64.size +
            QzaI8.size +
            QzaI16.size +
            QzaI32.size +
            QzaI64.size +
            QzaF8.size +
            QzaF16.size +
            QzaF32.size +
            QzaF64.size +
            QzaString.size
        )
        expect(runtimeOnTest.popStack(QzaString)).toBe('hello world12345678');
        expect(runtimeOnTest.popStack(QzaF64)).toBeCloseTo(-12.12);
        expect(runtimeOnTest.popStack(QzaF32)).toBeCloseTo(11.11);
        expect(runtimeOnTest.popStack(QzaF16)).toBeCloseTo(-10.1);
        expect(runtimeOnTest.popStack(QzaF8)).toBeCloseTo(9.0);
        expect(runtimeOnTest.popStack(QzaI64)).toBe(8);
        expect(runtimeOnTest.popStack(QzaI32)).toBe(-7);
        expect(runtimeOnTest.popStack(QzaI16)).toBe(6);
        expect(runtimeOnTest.popStack(QzaI8)).toBe(-5);
        expect(runtimeOnTest.popStack(QzaU64)).toBe(4);
        expect(runtimeOnTest.popStack(QzaU32)).toBe(3);
        expect(runtimeOnTest.popStack(QzaU16)).toBe(2);
        expect(runtimeOnTest.popStack(QzaU8)).toBe(1);
        expect(QzaStack.size - runtimeOnTest.get('stackPointer').js).toBe(0);
    })
})