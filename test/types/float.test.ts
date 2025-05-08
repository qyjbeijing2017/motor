import {
    QzaF8,
    QzaF16,
    QzaF32,
    QzaF64,
} from '../../src'

describe('F8', () => {
    test('default', () => {
        const valueOnTest = new QzaF8();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaF8(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaF8();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaF8();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new QzaF8();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F16', () => {
    test('default', () => {
        const valueOnTest = new QzaF16();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaF16(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaF16();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaF16();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new QzaF16();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F32', () => {
    test('default', () => {
        const valueOnTest = new QzaF32();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaF32(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaF32();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaF32();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new QzaF32();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('F64', () => {
    test('default', () => {
        const valueOnTest = new QzaF64();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaF64(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaF64();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaF64();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2.5);
    })
    test('set negative', () => {
        const valueOnTest = new QzaF64();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})