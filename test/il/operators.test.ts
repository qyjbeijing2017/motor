import {
    MotorILType,
    MotorOperator,
} from '../../src'

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
    expect(u8 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(u16 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(u32 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(u64 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(i8 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(i16 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(i32 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(i64 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(f8 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(f16 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(f32 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(f64 & MotorOperator.mask).toBe(MotorOperator.push)
    expect(u8 & MotorILType.mask).toBe(MotorILType.U8)
    expect(u16 & MotorILType.mask).toBe(MotorILType.U16)
    expect(u32 & MotorILType.mask).toBe(MotorILType.U32)
    expect(u64 & MotorILType.mask).toBe(MotorILType.U64)
    expect(i8 & MotorILType.mask).toBe(MotorILType.I8)
    expect(i16 & MotorILType.mask).toBe(MotorILType.I16)
    expect(i32 & MotorILType.mask).toBe(MotorILType.I32)
    expect(i64 & MotorILType.mask).toBe(MotorILType.I64)
    expect(f8 & MotorILType.mask).toBe(MotorILType.F8)
    expect(f16 & MotorILType.mask).toBe(MotorILType.F16)
    expect(f32 & MotorILType.mask).toBe(MotorILType.F32)
    expect(f64 & MotorILType.mask).toBe(MotorILType.F64)
})