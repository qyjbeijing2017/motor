import {
    MotorILType,
    MotorOperator,
    MotorPushU8,
    MotorPushU16,
    MotorPushU32,
    MotorPushU64,
    MotorPushI8,
    MotorPushI16,
    MotorPushI32,
    MotorPushI64,
    MotorPushF8,
    MotorPushF16,
    MotorPushF32,
    MotorPushF64,
    MotorPopU8,
    MotorPopU16,
    MotorPopU32,
    MotorPopU64,
    MotorPopI8,
    MotorPopI16,
    MotorPopI32,
    MotorPopI64,
    MotorPopF8,
    MotorPopF16,
    MotorPopF32,
    MotorPopF64,
    MotorLocalU8,
    MotorLocalU16,
    MotorLocalU32,
    MotorLocalU64,
    MotorLocalI8,
    MotorLocalI16,
    MotorLocalI32,
    MotorLocalI64,
    MotorLocalF8,
    MotorLocalF16,
    MotorLocalF32,
    MotorLocalF64,
    MotorCall,
    MotorReturn,
    MotorAddU8,
    MotorAddU16,
    MotorAddU32,
    MotorAddU64,
    MotorAddI8,
    MotorAddI16,
    MotorAddI32,
    MotorAddI64,
    MotorAddF8,
    MotorAddF16,
    MotorAddF32,
    MotorAddF64,
} from '../src'

describe('IL Tests', () => {
    test('Operators', () => {
        const u8 = MotorOperator.push | MotorILType.U8
        const u16 = MotorOperator.push | MotorILType.U16
        const u32 = MotorOperator.push | MotorILType.U32
        const u64 = MotorOperator.push | MotorILType.U64
        const i8 = MotorOperator.push | MotorILType.I8
        const i16 = MotorOperator.push | MotorILType.I16
        const i32 = MotorOperator.push | MotorILType.I32
        const i64 = MotorOperator.push | MotorILType.I64
        const f8 = MotorOperator.push | MotorILType.F8
        const f16 = MotorOperator.push | MotorILType.F16
        const f32 = MotorOperator.push | MotorILType.F32
        const f64 = MotorOperator.push | MotorILType.F64
        expect(u8 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(u16 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(u32 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(u64 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(i8 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(i16 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(i32 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(i64 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(f8 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(f16 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(f32 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(f64 & MotorOperator.operator_mask).toBe(MotorOperator.push)
        expect(u8 & MotorILType.type_mask).toBe(MotorILType.U8)
        expect(u16 & MotorILType.type_mask).toBe(MotorILType.U16)
        expect(u32 & MotorILType.type_mask).toBe(MotorILType.U32)
        expect(u64 & MotorILType.type_mask).toBe(MotorILType.U64)
        expect(i8 & MotorILType.type_mask).toBe(MotorILType.I8)
        expect(i16 & MotorILType.type_mask).toBe(MotorILType.I16)
        expect(i32 & MotorILType.type_mask).toBe(MotorILType.I32)
        expect(i64 & MotorILType.type_mask).toBe(MotorILType.I64)
        expect(f8 & MotorILType.type_mask).toBe(MotorILType.F8)
        expect(f16 & MotorILType.type_mask).toBe(MotorILType.F16)
        expect(f32 & MotorILType.type_mask).toBe(MotorILType.F32)
        expect(f64 & MotorILType.type_mask).toBe(MotorILType.F64)
    })
    describe('Instruction', () => {
        describe('Push', () => {
            test('PushU8', () => {
                const instructionOnTest = new MotorPushU8();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.U8);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.U8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushU16', () => {
                const instructionOnTest = new MotorPushU16();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.U16);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.U16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushU32', () => {
                const instructionOnTest = new MotorPushU32();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.U32);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.U32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushU64', () => {
                const instructionOnTest = new MotorPushU64();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.U64);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.U64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushI8', () => {
                const instructionOnTest = new MotorPushI8();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.I8);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.I8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushI16', () => {
                const instructionOnTest = new MotorPushI16();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.I16);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.I16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushI32', () => {
                const instructionOnTest = new MotorPushI32();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.I32);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.I32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushI64', () => {
                const instructionOnTest = new MotorPushI64();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.I64);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.I64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushF8', () => {
                const instructionOnTest = new MotorPushF8();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.F8);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.F8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushF16', () => {
                const instructionOnTest = new MotorPushF16();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.F16);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.F16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushF32', () => {
                const instructionOnTest = new MotorPushF32();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.F32);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.F32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('PushF64', () => {
                const instructionOnTest = new MotorPushF64();
                expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.F64);
                expect(instructionOnTest.operator).toBe(MotorOperator.push);
                expect(instructionOnTest.ILType).toBe(MotorILType.F64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
        })
        describe('Pop', () => {
            test('PopU8', () => {
                const instructionOnTest = new MotorPopU8();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.U8);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.U8);
            })
            test('PopU16', () => {
                const instructionOnTest = new MotorPopU16();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.U16);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.U16);
            })
            test('PopU32', () => {
                const instructionOnTest = new MotorPopU32();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.U32);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.U32);
            })
            test('PopU64', () => {
                const instructionOnTest = new MotorPopU64();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.U64);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.U64);
            })
            test('PopI8', () => {
                const instructionOnTest = new MotorPopI8();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.I8);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.I8);
            })
            test('PopI16', () => {
                const instructionOnTest = new MotorPopI16();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.I16);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.I16);
            })
            test('PopI32', () => {
                const instructionOnTest = new MotorPopI32();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.I32);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.I32);
            })
            test('PopI64', () => {
                const instructionOnTest = new MotorPopI64();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.I64);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.I64);
            })
            test('PopF8', () => {
                const instructionOnTest = new MotorPopF8();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.F8);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.F8);
            })
            test('PopF16', () => {
                const instructionOnTest = new MotorPopF16();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.F16);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.F16);
            })
            test('PopF32', () => {
                const instructionOnTest = new MotorPopF32();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.F32);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.F32);
            })
            test('PopF64', () => {
                const instructionOnTest = new MotorPopF64();
                expect(instructionOnTest.code).toBe(MotorOperator.pop | MotorILType.F64);
                expect(instructionOnTest.operator).toBe(MotorOperator.pop);
                expect(instructionOnTest.ILType).toBe(MotorILType.F64);
            })
        })
        describe('Local', () => {
            test('LocalU8', () => {
                const instructionOnTest = new MotorLocalU8();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.U8);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.U8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalU16', () => {
                const instructionOnTest = new MotorLocalU16();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.U16);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.U16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalU32', () => {
                const instructionOnTest = new MotorLocalU32();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.U32);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.U32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalU64', () => {
                const instructionOnTest = new MotorLocalU64();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.U64);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.U64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalI8', () => {
                const instructionOnTest = new MotorLocalI8();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.I8);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.I8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalI16', () => {
                const instructionOnTest = new MotorLocalI16();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.I16);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.I16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalI32', () => {
                const instructionOnTest = new MotorLocalI32();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.I32);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.I32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalI64', () => {
                const instructionOnTest = new MotorLocalI64();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.I64);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.I64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalF8', () => {
                const instructionOnTest = new MotorLocalF8();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.F8);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.F8);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalF16', () => {
                const instructionOnTest = new MotorLocalF16();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.F16);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.F16);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalF32', () => {
                const instructionOnTest = new MotorLocalF32();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.F32);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.F32);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
            test('LocalF64', () => {
                const instructionOnTest = new MotorLocalF64();
                expect(instructionOnTest.code).toBe(MotorOperator.local | MotorILType.F64);
                expect(instructionOnTest.operator).toBe(MotorOperator.local);
                expect(instructionOnTest.ILType).toBe(MotorILType.F64);
                expect(instructionOnTest.js).toBe(0);
                instructionOnTest.js = -30;
                expect(instructionOnTest.js).toBe(-30);
                instructionOnTest.js = 30;
                expect(instructionOnTest.js).toBe(30);
            })
        })
        test('Call', () => {
            const instructionOnTest = new MotorCall();
            expect(instructionOnTest.code).toBe(MotorOperator.call);
            expect(instructionOnTest.operator).toBe(MotorOperator.call);
            expect(instructionOnTest.ILType).toBe(MotorILType.U8);
        })
        test('Return', () => {
            const instructionOnTest = new MotorReturn();
            expect(instructionOnTest.code).toBe(MotorOperator.return);
            expect(instructionOnTest.operator).toBe(MotorOperator.return);
            expect(instructionOnTest.ILType).toBe(MotorILType.U8);
            instructionOnTest.js = 30;
            expect(instructionOnTest.js).toBe(30);
        })
        describe('Add', () => {
            test('AddU8', () => {
                const instructionOnTest = new MotorAddU8();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.U8);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.U8);
            })
            test('AddU16', () => {
                const instructionOnTest = new MotorAddU16();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.U16);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.U16);
            })
            test('AddU32', () => {
                const instructionOnTest = new MotorAddU32();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.U32);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.U32);
            })
            test('AddU64', () => {
                const instructionOnTest = new MotorAddU64();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.U64);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.U64);
            })
            test('AddI8', () => {
                const instructionOnTest = new MotorAddI8();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.I8);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.I8);
            })
            test('AddI16', () => {
                const instructionOnTest = new MotorAddI16();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.I16);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.I16);
            })
            test('AddI32', () => {
                const instructionOnTest = new MotorAddI32();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.I32);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.I32);
            })
            test('AddI64', () => {
                const instructionOnTest = new MotorAddI64();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.I64);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.I64);
            })
            test('AddF8', () => {
                const instructionOnTest = new MotorAddF8();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.F8);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.F8);
            })
            test('AddF16', () => {
                const instructionOnTest = new MotorAddF16();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.F16);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.F16);
            })
            test('AddF32', () => {
                const instructionOnTest = new MotorAddF32();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.F32);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.F32);
            })
            test('AddF64', () => {
                const instructionOnTest = new MotorAddF64();
                expect(instructionOnTest.code).toBe(MotorOperator.add | MotorILType.F64);
                expect(instructionOnTest.operator).toBe(MotorOperator.add);
                expect(instructionOnTest.ILType).toBe(MotorILType.F64);
            })
        })
    })
})