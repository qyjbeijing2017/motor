import {
    MotorF8,
    MotorF16,
    MotorF32,
    MotorF64,
} from '../../src'

describe('F8', () => {
    test('default', () => {
        const valueOnTest = new MotorF8();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorF8(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorF8();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorF8();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new MotorF8();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F16', () => {
    test('default', () => {
        const valueOnTest = new MotorF16();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorF16(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorF16();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorF16();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new MotorF16();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F32', () => {
    test('default', () => {
        const valueOnTest = new MotorF32();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorF32(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorF32();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorF32();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new MotorF32();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F64', () => {
    test('default', () => {
        const valueOnTest = new MotorF64();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorF64(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorF64();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorF64();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new MotorF64();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})