import { Bool, Char, F32, I8, Instance, Struct, Array } from "../src";
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
            const arrayOnTest = new Instance(new Array(singleton(I8), 3), [1, 2, 3])
            expect(arrayOnTest.value).toEqual([1, 2, 3])
            arrayOnTest.value = [4, 5, 6]
            expect(arrayOnTest.value).toEqual([4, 5, 6])
        })
        test('array with struct', () => {
            const arrayOnTest = new Instance(new Array(new Struct({
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
            const arrayOnTest = new Instance(new Array(new Array(singleton(I8), 3), 3), [
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
            const arrayOnTest = new Instance(new Array(singleton(I8), 3), [1, 2, 3])
            expect(() => {
                arrayOnTest.value = [4, 5, 6, 7]
            }).toThrow('Out of bounds: 4 > 3')
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
                arr: new Array(singleton(I8), 3),
                b: singleton(Bool),
            }))
            structOnTest.value = {
                arr: [1, 2, 3],
                b: true,
            }
            expect(structOnTest.value.arr).toEqual([1, 2, 3])
            expect(structOnTest.value.b).toBe(true)
        })        
    })
});