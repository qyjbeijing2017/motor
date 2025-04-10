import { Bool, Char, F32, I8, Instance, Struct, MotorArray, Memory, I16, I32, I64, Pointer, MotorString, U32, List } from "../src";
import { singleton } from "../src/utils/singleton";

describe("type", () => {
    describe('float', () => {
        test('f8', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            expect(floatOnTest.value).toBeCloseTo(Math.PI)
            floatOnTest.value = Math.PI * 2
            expect(floatOnTest.value).toBeCloseTo(Math.PI * 2)
        })
        test('f16', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            expect(floatOnTest.value).toBeCloseTo(Math.PI)
            floatOnTest.value = Math.PI * 2
            expect(floatOnTest.value).toBeCloseTo(Math.PI * 2)
        })
        test('f32', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            expect(floatOnTest.value).toBeCloseTo(Math.PI)
            floatOnTest.value = Math.PI * 2
            expect(floatOnTest.value).toBeCloseTo(Math.PI * 2)
        })
        test('f64', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            expect(floatOnTest.value).toBeCloseTo(Math.PI)
            floatOnTest.value = Math.PI * 2
            expect(floatOnTest.value).toBeCloseTo(Math.PI * 2)
        })
    })
    describe('int', () => {
        test('i8', () => {
            const intOnTest = new Instance(singleton(I8), Math.PI)
            expect(intOnTest.value).toBe(Math.floor(Math.PI))
            intOnTest.value = Math.PI * 2
            expect(intOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('i16', () => {
            const intOnTest = new Instance(singleton(I8), Math.PI)
            expect(intOnTest.value).toBe(Math.floor(Math.PI))
            intOnTest.value = Math.PI * 2
            expect(intOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('i32', () => {
            const intOnTest = new Instance(singleton(I8), Math.PI)
            expect(intOnTest.value).toBe(Math.floor(Math.PI))
            intOnTest.value = Math.PI * 2
            expect(intOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('i64', () => {
            const intOnTest = new Instance(singleton(I8), Math.PI)
            expect(intOnTest.value).toBe(Math.floor(Math.PI))
            intOnTest.value = Math.PI * 2
            expect(intOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
    })
    describe('uint', () => {
        test('u8', () => {
            const uintOnTest = new Instance(singleton(I8), Math.PI)
            expect(uintOnTest.value).toBe(Math.floor(Math.PI))
            uintOnTest.value = Math.PI * 2
            expect(uintOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('u16', () => {
            const uintOnTest = new Instance(singleton(I8), Math.PI)
            expect(uintOnTest.value).toBe(Math.floor(Math.PI))
            uintOnTest.value = Math.PI * 2
            expect(uintOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('u32', () => {
            const uintOnTest = new Instance(singleton(I8), Math.PI)
            expect(uintOnTest.value).toBe(Math.floor(Math.PI))
            uintOnTest.value = Math.PI * 2
            expect(uintOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
        test('u64', () => {
            const uintOnTest = new Instance(singleton(I8), Math.PI)
            expect(uintOnTest.value).toBe(Math.floor(Math.PI))
            uintOnTest.value = Math.PI * 2
            expect(uintOnTest.value).toBe(Math.floor(Math.PI * 2))
        })
    })
    describe('bool', () => {
        test('bool', () => {
            const boolOnTest = new Instance(singleton(Bool))
            expect(boolOnTest.value).toBe(false)
            boolOnTest.value = true
            expect(boolOnTest.value).toBe(true)
        })
    })
    describe('char', () => {
        test('char', () => {
            const charOnTest = new Instance(singleton(Char), 'a')
            expect(charOnTest.value).toBe('a')
            charOnTest.value = 'b'
            expect(charOnTest.value).toBe('b')
        })
    })
    describe('array', () => {
        test('array', () => {
            const arrayOnTest = new Instance(new MotorArray(singleton(I8), 3), [1, 2, 3])
            expect(arrayOnTest.value).toEqual([1, 2, 3])
            arrayOnTest.value = [4, 5, 6]
            expect(arrayOnTest.value).toEqual([4, 5, 6])
        })
        test('array with struct', () => {
            const arrayOnTest = new Instance(new MotorArray(new Struct({
                f: singleton(F32),
                i: singleton(I8),
            }), 3), [
                { f: 1, i: 2 },
                { f: 3, i: 4 },
                { f: 5, i: 6 },
            ])
            expect(arrayOnTest.value).toEqual([
                { f: 1, i: 2 },
                { f: 3, i: 4 },
                { f: 5, i: 6 },
            ])
            arrayOnTest.value = [
                { f: 7, i: 8 },
                { f: 9, i: 10 },
                { f: 11, i: 12 },
            ]
            expect(arrayOnTest.value).toEqual([
                { f: 7, i: 8 },
                { f: 9, i: 10 },
                { f: 11, i: 12 },
            ])
        })
        test('array with array', () => {
            const arrayOnTest = new Instance(new MotorArray(new MotorArray(singleton(I8), 3), 3), [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
            expect(arrayOnTest.value).toEqual([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
            arrayOnTest.value = [
                [10, 11, 12],
                [13, 14, 15],
                [16, 17, 18],
            ]
            expect(arrayOnTest.value).toEqual([
                [10, 11, 12],
                [13, 14, 15],
                [16, 17, 18],
            ])
        })
        test('array out of bounds', () => {
            const arrayOnTest = new Instance(new MotorArray(singleton(I8), 3), [1, 2, 3])
            expect(() => {
                arrayOnTest.value = [4, 5, 6, 7]
            }).toThrow('Out of bounds: 4 > 3')
        })
        test('at', () => {
            const arrayOnTest = new Instance(new MotorArray(singleton(I8), 3), [1, 2, 3])
            const atOnTest = arrayOnTest.at(1)
            expect(atOnTest.value).toBe(2)
            atOnTest.value = 4
            expect(arrayOnTest.value).toEqual([1, 4, 3])
        })
    })
    describe('string', () => {
        test('string', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            expect(stringOnTest.value).toBe('abc')
            stringOnTest.value = 'def'
            expect(stringOnTest.value).toBe('def')
        })
        test('length', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            expect(stringOnTest.get('length').value).toBe(3)
            stringOnTest.value = 'defgh'
            expect(stringOnTest.get('length').value).toBe(5)
        })
        test('charArray', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            expect(stringOnTest.get('charArray').value).toEqual(['a', 'b', 'c'])
            stringOnTest.value = 'defgh'
            expect(stringOnTest.get('charArray').value).toEqual(['d', 'e', 'f', 'g', 'h'])
        })
        test('index', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            const charOnTest = stringOnTest.at(1)
            expect(charOnTest.value).toBe('b')
            charOnTest.value = 'd'
            expect(stringOnTest.value).toBe('adc')
            expect(stringOnTest.at(1).value).toBe('d')
        })
    })
    describe('struct', () => {
        test('struct', () => {
            const structOnTest = new Instance(new Struct({
                f: singleton(F32),
                i: singleton(I8),
                b: singleton(Bool),
            }), {
                f: Math.PI,
                i: 1,
                b: true,
            })
            console.log(structOnTest.value)
            expect(structOnTest.value.f).toBeCloseTo(Math.PI)
            expect(structOnTest.value.i).toBe(1)
            expect(structOnTest.value.b).toBe(true)
        })
        test('struct with struct', () => {
            const structOnTest = new Instance(new Struct({
                sub: new Struct({
                    f: singleton(F32),
                    i: singleton(I8),
                }),
                b: singleton(Bool),
            }))
            structOnTest.value = {
                sub: {
                    f: Math.PI,
                    i: 1,
                },
                b: true,
            }
            expect(structOnTest.value.sub.f).toBeCloseTo(Math.PI)
            expect(structOnTest.value.sub.i).toBe(1)
            expect(structOnTest.value.b).toBe(true)
        })
        test('struct with array', () => {
            const structOnTest = new Instance(new Struct({
                arr: new MotorArray(singleton(I8), 3),
                b: singleton(Bool),
            }))
            structOnTest.value = {
                arr: [1, 2, 3],
                b: true,
            }
            expect(structOnTest.value.arr).toEqual([1, 2, 3])
            expect(structOnTest.value.b).toBe(true)
        })
        test('get', () => {
            const structOnTest = new Instance(new Struct({
                f: singleton(F32),
                i: singleton(I8),
                b: singleton(Bool),
            }), {
                f: Math.PI,
                i: 1,
                b: true,
            })
            const f = structOnTest.get('f')
            const i = structOnTest.get('i')
            const b = structOnTest.get('b')
            expect(f.type).toBe(singleton(F32))
            expect(i.type).toBe(singleton(I8))
            expect(b.type).toBe(singleton(Bool))
            expect(f.value).toBeCloseTo(Math.PI)
            expect(i.value).toBe(1)
            expect(b.value).toBe(true)
        })
    })
    describe('serialization', () => {
        test('bool', () => {
            const memoryOnTest = new Memory()
            new Instance(singleton(Bool), true, memoryOnTest)
            const serialized = memoryOnTest.serialize()
            const viewer = new DataView(serialized.buffer)
            expect(viewer.getUint8(8)).toBe(1)
        })
        test('char', () => {
            const memoryOnTest = new Memory()
            new Instance(singleton(Char), 'a', memoryOnTest)
            const serialized = memoryOnTest.serialize()
            const viewer = new DataView(serialized.buffer)
            expect(viewer.getUint8(8)).toBe('a'.charCodeAt(0))
        })
        describe('float', () => {
            test('f8', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(F32), Math.PI, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getFloat32(8, true)).toBeCloseTo(Math.PI)
            })
            test('f16', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(F32), Math.PI, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getFloat32(8, true)).toBeCloseTo(Math.PI)
            })
            test('f32', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(F32), Math.PI, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getFloat32(8, true)).toBeCloseTo(Math.PI)
            })
            test('f64', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(F32), Math.PI, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getFloat32(8, true)).toBeCloseTo(Math.PI)
            })
        })
        describe('int', () => {
            test('i8', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I8), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getInt8(8)).toBe(1)
            })
            test('i16', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I16), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getInt16(8, true)).toBe(1)
            })
            test('i32', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I32), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getInt32(8, true)).toBe(1)
            })
            test('i64', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I64), 1n, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getBigInt64(8, true)).toBe(1n)
            })
        })
        describe('uint', () => {
            test('u8', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I8), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getUint8(8)).toBe(1)
            })
            test('u16', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I16), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getUint16(8, true)).toBe(1)
            })
            test('u32', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I32), 1, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getUint32(8, true)).toBe(1)
            })
            test('u64', () => {
                const memoryOnTest = new Memory()
                new Instance(singleton(I64), 1n, memoryOnTest)
                const serialized = memoryOnTest.serialize()
                const viewer = new DataView(serialized.buffer)
                expect(viewer.getBigUint64(8, true)).toBe(1n)
            })
        })
        test('array', () => {
            const memoryOnTest = new Memory()
            new Instance(new MotorArray(singleton(I8), 3), [1, 2, 3], memoryOnTest)
            const serialized = memoryOnTest.serialize()
            const viewer = new DataView(serialized.buffer)
            expect(viewer.getInt8(8)).toBe(1)
            expect(viewer.getInt8(9)).toBe(2)
            expect(viewer.getInt8(10)).toBe(3)
        })
        test('struct', () => {
            const memoryOnTest = new Memory()
            new Instance(new Struct({
                f: singleton(F32),
                i: singleton(I8),
                b: singleton(Bool),
            }), {
                f: Math.PI,
                i: 1,
                b: true,
            }, memoryOnTest)
            const serialized = memoryOnTest.serialize()
            const viewer = new DataView(serialized.buffer)
            expect(viewer.getFloat32(8, true)).toBeCloseTo(Math.PI)
            expect(viewer.getInt8(12)).toBe(1)
            expect(viewer.getUint8(13)).toBe(1)
        })
    })
    describe('pointer', () => {
        test('pointer', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            const pointerOnTest = new Instance(new Pointer(singleton(I8)), floatOnTest.address)
            expect(pointerOnTest.value).toBe(floatOnTest.address)
        })

        test('create pointer', () => {
            const floatOnTest = new Instance(singleton(F32), Math.PI)
            const pointerOnTest = floatOnTest.createPointer()
            expect(pointerOnTest.value).toBe(floatOnTest.address)
        })
        test('read pointer', () => {
            const memoryOnTest = new Memory()
            const floatOnTest = new Instance(singleton(F32), Math.PI, memoryOnTest)
            const pointerOnTest = new Instance(new Pointer(singleton(F32)), floatOnTest.address, memoryOnTest)
            expect(pointerOnTest.value).toBe(floatOnTest.address)
            const readOnTest = pointerOnTest.get('value')
            expect(readOnTest.address).toBe(floatOnTest.address)
        })
    })
    describe('list', () => {
        test('list', () => {
            const memoryOnTest = new Memory()
            const listOnTest = new Instance(new List(singleton(I8)), [1, 2, 3], memoryOnTest)
            expect(listOnTest.value).toEqual([1, 2, 3])
        })
        test('list index', () => {
            const memoryOnTest = new Memory()
            const listOnTest = new Instance(new List(singleton(I8)), [1, 2, 3], memoryOnTest)
            const indexOnTest = listOnTest.at(1)
            expect(indexOnTest.value).toBe(2)
            indexOnTest.value = 4
            expect(listOnTest.value).toEqual([1, 4, 3])
        })
        test('list expand', () => {
            const memoryOnTest = new Memory()
            const listOnTest = new Instance(new List(singleton(I8)), [1, 2, 3], memoryOnTest)
            listOnTest.value = [4, 5, 6, 7, 8, 9, 10]
            expect(listOnTest.value).toEqual([4, 5, 6, 7, 8, 9, 10])
        })
        test('list length', () => {
            const memoryOnTest = new Memory()
            const listOnTest = new Instance(new List(singleton(I8)), [1, 2, 3], memoryOnTest)
            expect(listOnTest.get('length').value).toBe(3)
            listOnTest.value = [4, 5, 6, 7, 8, 9, 10]
            expect(listOnTest.get('length').value).toBe(7)
        })
    })
});