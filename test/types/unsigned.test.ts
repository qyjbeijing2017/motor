import {
    QzaU8,
    QzaU16,
    QzaU32,
    QzaU64,
} from '../../src'

describe('U8', () => {
    test('default', () => {
        const valueOnTest = new QzaU8();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaU8(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaU8();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaU8();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaU8();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(254);
    })
})
describe('U16', () => {
    test('default', () => {
        const valueOnTest = new QzaU16();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaU16(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaU16();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaU16();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaU16();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(65534);
    })
})
describe('U32', () => {
    test('default', () => {
        const valueOnTest = new QzaU32();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaU32(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaU32();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaU32();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaU32();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(4294967294);
    })
})
describe('U64', () => {
    test('default', () => {
        const valueOnTest = new QzaU64();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new QzaU64(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new QzaU64();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new QzaU64();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new QzaU64();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(18446744073709551614);
    })
})