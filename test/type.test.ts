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
    MotorNull,
    MotorPointer,
    MotorStruct,
    MotorArray,
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
        const valueOnTest =  Math.PI
        const instanceOnTest = new MotorInstance(motorSingleton(MotorU64), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBe(Math.floor(valueOnTest))
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBe(Math.floor(valueOnTest))
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
        const valueOnTest = Math.floor(Math.PI)
        const instanceOnTest = new MotorInstance(motorSingleton(MotorI64), valueOnTest)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toBe(valueOnTest)
        })
        test('setValue', () => {
            const valueOnTest = 2 * Math.PI
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toBe(Math.floor(valueOnTest))
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

    describe('MotorNull', () => {
        test('defaultValue', () => {
            const instanceOnTest = new MotorInstance(motorSingleton(MotorNull), 0)
            expect(instanceOnTest.js).toEqual(0)
        })
    })
    describe('MotorPointer', () => {
        const instanceOnTest = new MotorInstance(motorSingleton(MotorPointer), 0)
        test('defaultValue', () => {
            expect(instanceOnTest.js).toEqual(0)
        })
        test('setValue', () => {
            const valueOnTest = Math.floor(2 * Math.PI)
            instanceOnTest.js = valueOnTest
            expect(instanceOnTest.js).toEqual(valueOnTest)
        })
    })
    describe('MotorStruct', () => {
        const pointerOnTest = new MotorPointer(motorSingleton(MotorF32))
        const arrayOnTest = new MotorArray(motorSingleton(MotorF32), 4)
        const subStructOnTest = new MotorStruct({
            f: motorSingleton(MotorF32),
            i: motorSingleton(MotorI32),
            u: motorSingleton(MotorU32),
        })
        const structOnTest = new MotorStruct({
            f: motorSingleton(MotorF32),
            i: motorSingleton(MotorI32),
            u: motorSingleton(MotorU32),
            p: pointerOnTest,
            a: arrayOnTest,
            s: subStructOnTest,
            n: motorSingleton(MotorNull),
        })
        test('defaultValue', () => {
            const instanceOnTest = new MotorInstance(structOnTest, {
                f: Math.PI,
                i: -3,
                u: 3,
                p: 24,
                a: [1, 2, 3, 4],
                s: {
                    f: Math.PI,
                    i: -3,
                    u: 3,
                },
                n: 0,
            })
            expect(instanceOnTest.js.f).toBeCloseTo(Math.PI)
            expect(instanceOnTest.js.i).toEqual(-3)
            expect(instanceOnTest.js.u).toEqual(3)
            expect(instanceOnTest.js.p).toEqual(24)
            expect(instanceOnTest.js.a[0]).toBeCloseTo(1)
            expect(instanceOnTest.js.a[1]).toBeCloseTo(2)
            expect(instanceOnTest.js.a[2]).toBeCloseTo(3)
            expect(instanceOnTest.js.a[3]).toBeCloseTo(4)
            expect(instanceOnTest.js.s.f).toBeCloseTo(Math.PI)
            expect(instanceOnTest.js.s.i).toEqual(-3)
            expect(instanceOnTest.js.s.u).toEqual(3)
            expect(instanceOnTest.js.n).toEqual(0)
        })
        test('setValue', () => {
            const instanceOnTest = new MotorInstance(structOnTest, {
                f: Math.PI,
                i: -3,
                u: 3,
                p: 24,
                a: [1, 2, 3, 4],
                s: {
                    f: Math.PI,
                    i: -3,
                    u: 3,
                },
                n: 0,
            })
            instanceOnTest.js = {
                f: 2 * Math.PI,
                i: -6,
                u: 6,
                p: 48,
                a: [5, 6, 7, 8],
                s: {
                    f: 2 * Math.PI,
                    i: -6,
                    u: 6,
                },
                n: 0,
            }
            expect(instanceOnTest.js.f).toBeCloseTo(2 * Math.PI)
            expect(instanceOnTest.js.i).toEqual(-6)
            expect(instanceOnTest.js.u).toEqual(6)
            expect(instanceOnTest.js.p).toEqual(48)
            expect(instanceOnTest.js.a[0]).toBeCloseTo(5)
            expect(instanceOnTest.js.a[1]).toBeCloseTo(6)
            expect(instanceOnTest.js.a[2]).toBeCloseTo(7)
            expect(instanceOnTest.js.a[3]).toBeCloseTo(8)
            expect(instanceOnTest.js.s.f).toBeCloseTo(2 * Math.PI)
            expect(instanceOnTest.js.s.i).toEqual(-6)
            expect(instanceOnTest.js.s.u).toEqual(6)
            expect(instanceOnTest.js.n).toEqual(0)
        })
    })
    describe('MotorArray', () => {
        const arrayOnTest = new MotorArray(motorSingleton(MotorF32), 4)
        test('defaultValue', () => {
            const instanceOnTest = new MotorInstance(arrayOnTest, [1.2, 2.2, 3.3, 4.4])
            expect(instanceOnTest.js[0]).toBeCloseTo(1.2)
            expect(instanceOnTest.js[1]).toBeCloseTo(2.2)
            expect(instanceOnTest.js[2]).toBeCloseTo(3.3)
            expect(instanceOnTest.js[3]).toBeCloseTo(4.4)
        })
        test('setValue', () => {
            const instanceOnTest = new MotorInstance(arrayOnTest, [1.2, 2.2, 3.3, 4.4])
            instanceOnTest.js = [5.5, 6.6, 7.7, 8.8]
            expect(instanceOnTest.js[0]).toBeCloseTo(5.5)
            expect(instanceOnTest.js[1]).toBeCloseTo(6.6)
            expect(instanceOnTest.js[2]).toBeCloseTo(7.7)
            expect(instanceOnTest.js[3]).toBeCloseTo(8.8)
        })
        test('int', () => {
            const arrayOnTest = new MotorArray(motorSingleton(MotorI32), 4)
            const instanceOnTest = new MotorInstance(arrayOnTest, [1, 2, 3, 4])
            expect(instanceOnTest.js[0]).toEqual(1)
            expect(instanceOnTest.js[1]).toEqual(2)
            expect(instanceOnTest.js[2]).toEqual(3)
            expect(instanceOnTest.js[3]).toEqual(4)
        })
        test('pointer', () => {
            const pointerOnTest = new MotorPointer(motorSingleton(MotorF32))
            const arrayOnTest = new MotorArray(pointerOnTest, 4)
            const instanceOnTest = new MotorInstance(arrayOnTest, [2, 4, 8, 16])
            expect(instanceOnTest.js[0]).toEqual(2)
            expect(instanceOnTest.js[1]).toEqual(4)
            expect(instanceOnTest.js[2]).toEqual(8)
            expect(instanceOnTest.js[3]).toEqual(16)
        })
        test('struct', () => {
            const structOnTest = new MotorStruct({
                f: motorSingleton(MotorF32),
                i: motorSingleton(MotorI32),
                u: motorSingleton(MotorU32),
            })
            const arrayOnTest = new MotorArray(structOnTest, 4)
            const instanceOnTest = new MotorInstance(arrayOnTest, [
                { f: 1, i: 2, u: 3 },
                { f: 4, i: 5, u: 6 },
                { f: 7, i: 8, u: 9 },
                { f: 10, i: 11, u: 12 },
            ])
            expect(instanceOnTest.js[0].f).toBeCloseTo(1)
            expect(instanceOnTest.js[0].i).toEqual(2)
            expect(instanceOnTest.js[0].u).toEqual(3)
            expect(instanceOnTest.js[1].f).toBeCloseTo(4)
            expect(instanceOnTest.js[1].i).toEqual(5)
            expect(instanceOnTest.js[1].u).toEqual(6)
            expect(instanceOnTest.js[2].f).toBeCloseTo(7)
            expect(instanceOnTest.js[2].i).toEqual(8)
            expect(instanceOnTest.js[2].u).toEqual(9)
            expect(instanceOnTest.js[3].f).toBeCloseTo(10)
            expect(instanceOnTest.js[3].i).toEqual(11)
            expect(instanceOnTest.js[3].u).toEqual(12)
        })
        test('array', () => {
            const subArrayOnTest = new MotorArray(motorSingleton(MotorF32), 4)
            const arrayOnTest = new MotorArray(subArrayOnTest, 4)
            const instanceOnTest = new MotorInstance(arrayOnTest, [
                [1.2, 2.2, 3.3, 4.4],
                [5.5, 6.6, 7.7, 8.8],
                [9.9, 10.10, 11.11, 12.12],
                [13.13, 14.14, 15.15, 16.16],
            ])
            expect(instanceOnTest.js[0][0]).toBeCloseTo(1.2)
            expect(instanceOnTest.js[0][1]).toBeCloseTo(2.2)
            expect(instanceOnTest.js[0][2]).toBeCloseTo(3.3)
            expect(instanceOnTest.js[0][3]).toBeCloseTo(4.4)
            expect(instanceOnTest.js[1][0]).toBeCloseTo(5.5)
            expect(instanceOnTest.js[1][1]).toBeCloseTo(6.6)
            expect(instanceOnTest.js[1][2]).toBeCloseTo(7.7)
            expect(instanceOnTest.js[1][3]).toBeCloseTo(8.8)
            expect(instanceOnTest.js[2][0]).toBeCloseTo(9.9)
            expect(instanceOnTest.js[2][1]).toBeCloseTo(10.10)
            expect(instanceOnTest.js[2][2]).toBeCloseTo(11.11)
            expect(instanceOnTest.js[2][3]).toBeCloseTo(12.12)
            expect(instanceOnTest.js[3][0]).toBeCloseTo(13.13)
            expect(instanceOnTest.js[3][1]).toBeCloseTo(14.14)
            expect(instanceOnTest.js[3][2]).toBeCloseTo(15.15)
            expect(instanceOnTest.js[3][3]).toBeCloseTo(16.16)
        })
        test('null', () => {
            const arrayOnTest = new MotorArray(motorSingleton(MotorNull), 4)
            const instanceOnTest = new MotorInstance(arrayOnTest, [0, 0, 0, 0])
            expect(instanceOnTest.js[0]).toEqual(0)
            expect(instanceOnTest.js[1]).toEqual(0)
            expect(instanceOnTest.js[2]).toEqual(0)
            expect(instanceOnTest.js[3]).toEqual(0)
        })
    })
})