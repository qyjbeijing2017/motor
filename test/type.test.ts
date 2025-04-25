import {
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
    motorCreateStruct,
    motorCreateArray,
    MotorString,
    motorCreatePointer,
    MotorNull,
    motorCreateFunction,
    MotorLocalF32,
    MotorAddF32,
    MotorReturn,
    MotorLocalF16,
    MotorAddF16,
} from '../src';
import { MotorFunctionFrame } from '../src/il/function-frame';

describe('Type Tests', () => {
    describe('U8', () => {
        test('default', () => {
            const valueOnTest = new MotorU8();
            expect(valueOnTest.js).toBe(0);
        })
        test('default value', () => {
            const valueOnTest = new MotorU8(1);
            expect(valueOnTest.js).toBe(1);
        })
        test('set js', () => {
            const valueOnTest = new MotorU8();
            valueOnTest.js = 2;
            expect(valueOnTest.js).toBe(2);
        })
        test('set float', () => {
            const valueOnTest = new MotorU8();
            valueOnTest.js = 2.5;
            expect(valueOnTest.js).toBe(2);
        })
        test('set negative', () => {
            const valueOnTest = new MotorU8();
            valueOnTest.js = -2;
            expect(valueOnTest.js).toBe(254);
        })
    })
    describe('U16', () => {
        test('default', () => {
            const valueOnTest = new MotorU16();
            expect(valueOnTest.js).toBe(0);
        })
        test('default value', () => {
            const valueOnTest = new MotorU16(1);
            expect(valueOnTest.js).toBe(1);
        })
        test('set js', () => {
            const valueOnTest = new MotorU16();
            valueOnTest.js = 2;
            expect(valueOnTest.js).toBe(2);
        })
        test('set float', () => {
            const valueOnTest = new MotorU16();
            valueOnTest.js = 2.5;
            expect(valueOnTest.js).toBe(2);
        })
        test('set negative', () => {
            const valueOnTest = new MotorU16();
            valueOnTest.js = -2;
            expect(valueOnTest.js).toBe(65534);
        })
    })
    describe('U32', () => {
        test('default', () => {
            const valueOnTest = new MotorU32();
            expect(valueOnTest.js).toBe(0);
        })
        test('default value', () => {
            const valueOnTest = new MotorU32(1);
            expect(valueOnTest.js).toBe(1);
        })
        test('set js', () => {
            const valueOnTest = new MotorU32();
            valueOnTest.js = 2;
            expect(valueOnTest.js).toBe(2);
        })
        test('set float', () => {
            const valueOnTest = new MotorU32();
            valueOnTest.js = 2.5;
            expect(valueOnTest.js).toBe(2);
        })
        test('set negative', () => {
            const valueOnTest = new MotorU32();
            valueOnTest.js = -2;
            expect(valueOnTest.js).toBe(4294967294);
        })
    })
    describe('U64', () => {
        test('default', () => {
            const valueOnTest = new MotorU64();
            expect(valueOnTest.js).toBe(0);
        })
        test('default value', () => {
            const valueOnTest = new MotorU64(1);
            expect(valueOnTest.js).toBe(1);
        })
        test('set js', () => {
            const valueOnTest = new MotorU64();
            valueOnTest.js = 2;
            expect(valueOnTest.js).toBe(2);
        })
        test('set float', () => {
            const valueOnTest = new MotorU64();
            valueOnTest.js = 2.5;
            expect(valueOnTest.js).toBe(2);
        })
        test('set negative', () => {
            const valueOnTest = new MotorU64();
            valueOnTest.js = -2;
            expect(valueOnTest.js).toBe(18446744073709551614);
        })
    })
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
    describe('Struct', () => {
        const SubStructOnTest = motorCreateStruct({
            i8: MotorI8,
            f8: MotorF8,
            u8: MotorU8,
            i16: MotorI16,
            f16: MotorF16,
            u16: MotorU16,
        })
        const StructOnTest = motorCreateStruct({
            i32: MotorI32,
            f32: MotorF32,
            u32: MotorU32,
            i64: MotorI64,
            f64: MotorF64,
            u64: MotorU64,
            sub: SubStructOnTest,
        })
        const instanceOnTest = new StructOnTest({
            i32: 1,
            f32: 2.2,
            u32: 3,
            i64: 4,
            f64: 5.5,
            u64: 6,
            sub: {
                i8: 7,
                f8: 8.8,
                u8: 9,
                i16: 10,
                f16: 11.11,
                u16: 12,
            }
        })
        test('default', () => {
            expect(instanceOnTest.js.i32).toBe(1)
            expect(instanceOnTest.js.f32).toBeCloseTo(2.2)
            expect(instanceOnTest.js.u32).toBe(3)
            expect(instanceOnTest.js.i64).toBe(4)
            expect(instanceOnTest.js.f64).toBeCloseTo(5.5)
            expect(instanceOnTest.js.u64).toBe(6)
            expect(instanceOnTest.js.sub.i8).toBe(7)
            expect(instanceOnTest.js.sub.f8).toBeCloseTo(9)
            expect(instanceOnTest.js.sub.u8).toBe(9)
            expect(instanceOnTest.js.sub.i16).toBe(10)
            expect(instanceOnTest.js.sub.f16).toBeCloseTo(11.11)
            expect(instanceOnTest.js.sub.u16).toBe(12)
        })
        test('set js', () => {
            instanceOnTest.js = {
                i32: 2,
                f32: 3.3,
                u32: 4,
                i64: 5,
                f64: 6.6,
                u64: 7,
                sub: {
                    i8: 8,
                    f8: 9.9,
                    u8: 10,
                    i16: 11,
                    f16: 12.12,
                    u16: 13,
                }
            }
            expect(instanceOnTest.js.i32).toBe(2)
            expect(instanceOnTest.js.f32).toBeCloseTo(3.3)
            expect(instanceOnTest.js.u32).toBe(4)
            expect(instanceOnTest.js.i64).toBe(5)
            expect(instanceOnTest.js.f64).toBeCloseTo(6.6)
            expect(instanceOnTest.js.u64).toBe(7)
            expect(instanceOnTest.js.sub.i8).toBe(8)
            expect(instanceOnTest.js.sub.f8).toBeCloseTo(10)
            expect(instanceOnTest.js.sub.u8).toBe(10)
            expect(instanceOnTest.js.sub.i16).toBe(11)
            expect(instanceOnTest.js.sub.f16).toBeCloseTo(12.12)
            expect(instanceOnTest.js.sub.u16).toBe(13)
        })
    })
    describe('Array', () => {
        const ArrayOnTest = motorCreateArray(MotorU8, 10);
        const instanceOnTest = new ArrayOnTest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        test('default', () => {
            expect(instanceOnTest.js).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        })
        test('set js', () => {
            instanceOnTest.js = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            expect(instanceOnTest.js).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        })
    })
    describe('String', () => {
        test('default', () => {
            const valueOnTest = new MotorString();
            expect(valueOnTest.js).toBe('');
        })
        test('default value', () => {
            const valueOnTest = new MotorString('hello');
            expect(valueOnTest.js).toBe('hello');
        })
        test('set js', () => {
            const valueOnTest = new MotorString();
            valueOnTest.js = 'world';
            expect(valueOnTest.js).toBe('world');
        })
    })
    describe('Pointer', () => {
        const PointerOnTest = motorCreatePointer(MotorU8);
        const instanceOnTest = new PointerOnTest(0);
        test('default', () => {
            expect(instanceOnTest.js).toBe(0);
        })
        test('default value', () => {
            const valueOnTest = new MotorU8(1);
            const pointerOnTest = new PointerOnTest(valueOnTest.address);
            expect(pointerOnTest.js).toBe(valueOnTest.address);
            expect(pointerOnTest.value.js).toBe(1);
        })
        test('set js', () => {
            const valueOnTest = new MotorU8(2);
            const pointerOnTest = new PointerOnTest();
            expect(pointerOnTest.js).toBe(0);
            expect(pointerOnTest.value.js).toBe(null);
            pointerOnTest.js = valueOnTest.address;
            expect(pointerOnTest.js).toBe(valueOnTest.address);
            expect(pointerOnTest.value.js).toBe(2);
        })
    })
    describe('Null', () => {
        test('default', () => {
            const valueOnTest = new MotorNull();
            expect(valueOnTest.js).toBe(null);
        })
    })
    describe('Function', () => {
        test('default', () => {
            const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32]);
            const instanceOnTest = new FunctionOnTest([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorLocalF32, immediate: MotorF32.size },
                { type: MotorAddF32 },
                { type: MotorReturn, immediate: MotorF32.size },
            ]);
            expect(instanceOnTest.js).toEqual([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorLocalF32, immediate: MotorF32.size },
                { type: MotorAddF32 },
                { type: MotorReturn, immediate: MotorF32.size },
            ]);
        })
        test('set js', () => {
            const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32]);
            const instanceOnTest = new FunctionOnTest([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorLocalF32, immediate: MotorF32.size },
                { type: MotorAddF32 },
                { type: MotorReturn, immediate: MotorF32.size },
            ]);
            instanceOnTest.js = [
                { type: MotorLocalF16, immediate: 0 },
                { type: MotorLocalF16, immediate: MotorF16.size },
                { type: MotorAddF16 },
                { type: MotorReturn, immediate: MotorF16.size },
            ];
            expect(instanceOnTest.js).toEqual([
                { type: MotorLocalF16, immediate: 0 },
                { type: MotorLocalF16, immediate: MotorF16.size },
                { type: MotorAddF16 },
                { type: MotorReturn, immediate: MotorF16.size },
            ]);
        })
        test('call', () => {
            const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32]);
            const instanceOnTest = new FunctionOnTest([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorReturn, immediate: MotorF32.size },
            ]);
            const valueOnTest = instanceOnTest.call([1]);
            expect(valueOnTest).toBe(1);
            const valueOnTest2 = instanceOnTest.call([2]);
            expect(valueOnTest2).toBe(2);
        })
    })
})
