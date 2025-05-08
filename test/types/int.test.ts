import {
    QzaI8,
    QzaI16,
    QzaI32,
    QzaI64,
} from '../../src'
describe('I8', () => {
    test('default', () => {
        const valueOnTest = new QzaI8();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaI8(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaI8();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaI8();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaI8();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
});
describe('I16', () => {
    test('default', () => {
        const valueOnTest = new QzaI16();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaI16(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaI16();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaI16();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaI16();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('I32', () => {
    test('default', () => {
        const valueOnTest = new QzaI32();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaI32(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaI32();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaI32();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaI32();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('I64', () => {
    test('default', () => {
        const valueOnTest = new QzaI64();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaI64(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaI64();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaI64();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaI64();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})