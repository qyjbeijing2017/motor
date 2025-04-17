import {
    MotorInstance,
    motorSingleton,
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
} from '../src'

describe('type', () => {
    describe('MotorU8', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorU8), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorU16', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorU16), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorU32', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorU32), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorU64', () => {
        const valueOnTest =  BigInt(Math.floor(Math.PI))
        const instanceOnTest = new MotorInstance(motorSingleton(MotorU64), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = BigInt(Math.floor(2 * Math.PI))
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(valueOnTest)
        })
    })

    describe('MotorI8', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorI8), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorI16', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorI16), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorI32', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorI32), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(Math.floor(valueOnTest))
        })
    })
    describe('MotorI64', () => {
        const valueOnTest = BigInt(Math.floor(Math.PI))
        const instanceOnTest = new MotorInstance(motorSingleton(MotorI64), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = BigInt(Math.floor(2 * Math.PI))
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(valueOnTest)
        })
    })

    describe('MotorF8', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorF8), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBeCloseTo(3.25)
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBeCloseTo(6.5)
        })
    })
    describe('MotorF16', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorF16), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
    })
    describe('MotorF32', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorF32), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
    })
    describe('MotorF64', () => {
        const valueOnTest = Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorF64), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBeCloseTo(valueOnTest)
        })
    })

})