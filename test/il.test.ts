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
    motorCreateFunction,
    MotorU8,
    MotorI8,
    MotorF8,
    MotorF16,
    MotorF32,
    MotorF64,
    MotorNull,
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

    describe("Run", () => {
        describe("Push", () => {
            test("PushU8", () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushU8, immediate: 234 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call()).toBe(234)
            })
            test("PushU16", () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushU16, immediate: 234 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call()).toBe(234)
            })
            test("PushU32", () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushU32, immediate: 234 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call()).toBe(234)
            })
            test("PushU64", () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushU64, immediate: 234 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call()).toBe(234)
            })
            test("PushI8", () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushI8, immediate: -21 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call()).toBe(-21)
            })
            test("PushI16", () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushI16, immediate: 21 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call()).toBe(21)
            })
            test("PushI32", () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushI32, immediate: -21 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call()).toBe(-21)
            })
            test("PushI64", () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushI64, immediate: 21 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call()).toBe(21)
            })
            test("PushF8", () => {
                const FunctionOnTest = motorCreateFunction(MotorF8, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushF8, immediate: -0.3 },
                    { type: MotorReturn, immediate: MotorF8.size },
                ])
                expect(instructionOnTest.call()).toBeCloseTo(-0.3125)
            })
            test("PushF16", () => {
                const FunctionOnTest = motorCreateFunction(MotorF16, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushF16, immediate: 0.3 },
                    { type: MotorReturn, immediate: MotorF16.size },
                ])
                expect(instructionOnTest.call()).toBeCloseTo(0.3)
            })
            test("PushF32", () => {
                const FunctionOnTest = motorCreateFunction(MotorF32, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushF32, immediate: -0.324 },
                    { type: MotorReturn, immediate: MotorF32.size },
                ])
                expect(instructionOnTest.call()).toBeCloseTo(-0.324)
            })
            test("PushF64", () => {
                const FunctionOnTest = motorCreateFunction(MotorF64, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushF64, immediate: 0.324 },
                    { type: MotorReturn, immediate: MotorF64.size },
                ])
                expect(instructionOnTest.call()).toBeCloseTo(0.324)
            })

        })
        describe("Pop", () => {
            test("PopU8", () => {
                const FunctionOnTest = motorCreateFunction(MotorNull, [])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorPushU8, immediate: 234 },
                    { type: MotorPopU8 },
                    { type: MotorReturn },
                ])
                expect(instructionOnTest.call()).toBe(null)
            })
        })
        describe('Local', () => {
            test('LocalU8', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU8, immediate: 0 },
                    { type: MotorLocalU8, immediate: MotorU8.size },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(2)
            })
            test('LocalU16', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU16, immediate: 0 },
                    { type: MotorLocalU16, immediate: MotorU8.size },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(2)
            })
            test('LocalU32', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU32, immediate: 0 },
                    { type: MotorLocalU32, immediate: MotorU8.size },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(2)
            })
            test('LocalU64', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU64, immediate: 0 },
                    { type: MotorLocalU64, immediate: MotorU8.size },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(2)
            })
            test('LocalI8', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI8, immediate: 0 },
                    { type: MotorLocalI8, immediate: MotorI8.size },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalI16', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI16, immediate: 0 },
                    { type: MotorLocalI16, immediate: MotorI8.size },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalI32', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI32, immediate: 0 },
                    { type: MotorLocalI32, immediate: MotorI8.size },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalI64', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI64, immediate: 0 },
                    { type: MotorLocalI64, immediate: MotorI8.size },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalF8', () => {
                const FunctionOnTest = motorCreateFunction(MotorF8, [MotorF8, MotorF8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF8, immediate: 0 },
                    { type: MotorLocalF8, immediate: MotorF8.size },
                    { type: MotorReturn, immediate: MotorF8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalF16', () => {
                const FunctionOnTest = motorCreateFunction(MotorF16, [MotorF16, MotorF16])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF16, immediate: 0 },
                    { type: MotorLocalF16, immediate: MotorF16.size },
                    { type: MotorReturn, immediate: MotorF16.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalF32', () => {
                const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF32, immediate: 0 },
                    { type: MotorLocalF32, immediate: MotorF32.size },
                    { type: MotorReturn, immediate: MotorF32.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
            test('LocalF64', () => {
                const FunctionOnTest = motorCreateFunction(MotorF64, [MotorF64, MotorF64])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF64, immediate: 0 },
                    { type: MotorLocalF64, immediate: MotorF64.size },
                    { type: MotorReturn, immediate: MotorF64.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-2)
            })
        })
        describe('Add', () => {
            test('AddU8', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU8, immediate: 0 },
                    { type: MotorLocalU8, immediate: MotorU8.size },
                    { type: MotorAddU8 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(3)
            })
            test('AddU16', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU16, immediate: 0 },
                    { type: MotorLocalU16, immediate: MotorU8.size },
                    { type: MotorAddU16 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(3)
            })
            test('AddU32', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU32, immediate: 0 },
                    { type: MotorLocalU32, immediate: MotorU8.size },
                    { type: MotorAddU32 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(3)
            })
            test('AddU64', () => {
                const FunctionOnTest = motorCreateFunction(MotorU8, [MotorU8, MotorU8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalU64, immediate: 0 },
                    { type: MotorLocalU64, immediate: MotorU8.size },
                    { type: MotorAddU64 },
                    { type: MotorReturn, immediate: MotorU8.size },
                ])
                expect(instructionOnTest.call([1, 2])).toBe(3)
            })
            test('AddI8', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI8, immediate: 0 },
                    { type: MotorLocalI8, immediate: MotorI8.size },
                    { type: MotorAddI8 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-3)
            })
            test('AddI16', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI16, immediate: 0 },
                    { type: MotorLocalI16, immediate: MotorI8.size },
                    { type: MotorAddI16 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-3)
            })
            test('AddI32', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI32, immediate: 0 },
                    { type: MotorLocalI32, immediate: MotorI8.size },
                    { type: MotorAddI32 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-3)
            })
            test('AddI64', () => {
                const FunctionOnTest = motorCreateFunction(MotorI8, [MotorI8, MotorI8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalI64, immediate: 0 },
                    { type: MotorLocalI64, immediate: MotorI8.size },
                    { type: MotorAddI64 },
                    { type: MotorReturn, immediate: MotorI8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-3)
            })
            test('AddF8', () => {
                const FunctionOnTest = motorCreateFunction(MotorF8, [MotorF8, MotorF8])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF8, immediate: 0 },
                    { type: MotorLocalF8, immediate: MotorF8.size },
                    { type: MotorAddF8 },
                    { type: MotorReturn, immediate: MotorF8.size },
                ])
                expect(instructionOnTest.call([-1, -2])).toBe(-3)
            })
            test('AddF16', () => {
                const FunctionOnTest = motorCreateFunction(MotorF16, [MotorF16, MotorF16])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF16, immediate: 0 },
                    { type: MotorLocalF16, immediate: MotorF16.size },
                    { type: MotorAddF16 },
                    { type: MotorReturn, immediate: MotorF16.size },
                ])
                expect(instructionOnTest.call([-1.1, -2.2])).toBeCloseTo(-3.3)
            })
            test('AddF32', () => {
                const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF32, immediate: 0 },
                    { type: MotorLocalF32, immediate: MotorF32.size },
                    { type: MotorAddF32 },
                    { type: MotorReturn, immediate: MotorF32.size },
                ])
                expect(instructionOnTest.call([-1.1, -2.2])).toBeCloseTo(-3.3)
            })
            test('AddF64', () => {
                const FunctionOnTest = motorCreateFunction(MotorF64, [MotorF64, MotorF64])
                const instructionOnTest = new FunctionOnTest([
                    { type: MotorLocalF64, immediate: 0 },
                    { type: MotorLocalF64, immediate: MotorF64.size },
                    { type: MotorAddF64 },
                    { type: MotorReturn, immediate: MotorF64.size },
                ])
                expect(instructionOnTest.call([-1.1, -2.2])).toBeCloseTo(-3.3)
            })
        })
        test('Call', () => {
            const FunctionAdd = motorCreateFunction(MotorF32, [MotorF32, MotorF32])
            const add = new FunctionAdd([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorLocalF32, immediate: MotorF32.size },
                { type: MotorAddF32 },
                { type: MotorReturn, immediate: MotorF32.size },
            ])
            const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32, MotorF32])
            const instructionOnTest = new FunctionOnTest([
                { type: MotorLocalF32, immediate: 0 },
                { type: MotorLocalF32, immediate: MotorF32.size },
                { type: MotorPushU64, immediate: add.refAddress },
                { type: MotorCall },
                { type: MotorLocalF32, immediate: MotorF32.size * 2 },
                { type: MotorPushU64, immediate: add.refAddress },
                { type: MotorCall },
                { type: MotorReturn, immediate: MotorF32.size },
            ])
            expect(instructionOnTest.call([1.1, 2.2, 3.3])).toBeCloseTo(6.6)

        })
    })
})