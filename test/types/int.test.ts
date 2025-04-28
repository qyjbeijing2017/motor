import {
    MotorI8,
    MotorI16,
    MotorI32,
    MotorI64,
} from '../../src'
describe('I8', () => {
    test('default', () => {
        const valueOnTest = new MotorI8();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorI8(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorI8();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorI8();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new MotorI8();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
});
describe('I16', () => {
    test('default', () => {
        const valueOnTest = new MotorI16();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorI16(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorI16();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorI16();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new MotorI16();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('I32', () => {
    test('default', () => {
        const valueOnTest = new MotorI32();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorI32(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorI32();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorI32();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new MotorI32();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})
describe('I64', () => {
    test('default', () => {
        const valueOnTest = new MotorI64();
        expect(valueOnTest.js).toBe(0);
    })
    test('default value', () => {
        const valueOnTest = new MotorI64(1);
        expect(valueOnTest.js).toBe(1);
    })
    test('set js', () => {
        const valueOnTest = new MotorI64();
        valueOnTest.js = 2;
        expect(valueOnTest.js).toBe(2);
    })
    test('set float', () => {
        const valueOnTest = new MotorI64();
        valueOnTest.js = 2.5;
        expect(valueOnTest.js).toBe(2);
    })
    test('set negative', () => {
        const valueOnTest = new MotorI64();
        valueOnTest.js = -2;
        expect(valueOnTest.js).toBe(-2);
    })
})