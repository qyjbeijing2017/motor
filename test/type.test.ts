import { Bool, Char, F32, I8, Instance, Struct, MotorArray, Memory, I16, I32, I64, Pointer, MotorString, U32 } from "../src";
import { singleton } from "../src/utils/singleton";

describe("type", () => {
    describe('float',()=> {
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
    describe('int',()=> {
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
    describe('uint',()=> {
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
    describe('bool',()=> {
        test('bool', () => {
            const boolOnTest = new Instance(singleton(Bool))
            expect(boolOnTest.value).toBe(false)
            boolOnTest.value = true
            expect(boolOnTest.value).toBe(true)
        })
    })
    describe('char',()=> {
        test('char', () => {
            const charOnTest = new Instance(singleton(Char), 'a')
            expect(charOnTest.value).toBe('a')
            charOnTest.value = 'b'
            expect(charOnTest.value).toBe('b')
        })
    })
    describe('array',()=> {
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
        test('at', ()=>{
            const arrayOnTest = new Instance(new MotorArray(singleton(I8), 3), [1, 2, 3])
            expect(arrayOnTest.at(0) instanceof Instance).toBe(true)
            expect(arrayOnTest.at(0).type).toBe(singleton(I8))
            expect(arrayOnTest.at(0).value).toBe(1)
        })
    })
    describe('string',()=> {
        test('string', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            expect(stringOnTest.value).toBe('abc')
            stringOnTest.value = 'def'
            expect(stringOnTest.value).toBe('def')
        })
        test('length', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            const length = stringOnTest.get('length')
            expect(length instanceof Instance).toBe(true)
            expect(length.type).toBe(singleton(U32))
            expect(length.value).toBe(3)
        });
        test('charArray', () => {
            const stringOnTest = new Instance(singleton(MotorString), 'abc')
            const charArray = stringOnTest.get('charArray')
            // expect(charArray instanceof Instance).toBe(true)
            expect(charArray.value).toEqual(['a', 'b', 'c'])
        })
    })
    
    describe('struct',()=> {
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
            }), {
                f: Math.PI,
            })
            expect(structOnTest.get('f') instanceof Instance).toBe(true)
            expect(structOnTest.get('f').type).toBe(singleton(F32))
            expect(structOnTest.get('f').value).toBeCloseTo(Math.PI)
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
            expect(pointerOnTest.pointerValue.address).toBe(floatOnTest.address)
            expect(pointerOnTest.pointerValue.type).toBe(singleton(F32))
            expect(pointerOnTest.pointerValue.value).toBe(floatOnTest.value)
        })
    })
});