import {
    QzaILType,
    QzaOperator,
} from '../../src'

test('Operators', () => {
    const u8 = QzaOperator.push | QzaILType.U8
    const u16 = QzaOperator.push | QzaILType.U16
    const u32 = QzaOperator.push | QzaILType.U32
    const u64 = QzaOperator.push | QzaILType.U64
    const i8 = QzaOperator.push | QzaILType.I8
    const i16 = QzaOperator.push | QzaILType.I16
    const i32 = QzaOperator.push | QzaILType.I32
    const i64 = QzaOperator.push | QzaILType.I64
    const f8 = QzaOperator.push | QzaILType.F8
    const f16 = QzaOperator.push | QzaILType.F16
    const f32 = QzaOperator.push | QzaILType.F32
    const f64 = QzaOperator.push | QzaILType.F64
    expect(u8 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(u16 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(u32 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(u64 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(i8 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(i16 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(i32 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(i64 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(f8 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(f16 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(f32 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(f64 & QzaOperator.mask).toBe(QzaOperator.push)
    expect(u8 & QzaILType.mask).toBe(QzaILType.U8)
    expect(u16 & QzaILType.mask).toBe(QzaILType.U16)
    expect(u32 & QzaILType.mask).toBe(QzaILType.U32)
    expect(u64 & QzaILType.mask).toBe(QzaILType.U64)
    expect(i8 & QzaILType.mask).toBe(QzaILType.I8)
    expect(i16 & QzaILType.mask).toBe(QzaILType.I16)
    expect(i32 & QzaILType.mask).toBe(QzaILType.I32)
    expect(i64 & QzaILType.mask).toBe(QzaILType.I64)
    expect(f8 & QzaILType.mask).toBe(QzaILType.F8)
    expect(f16 & QzaILType.mask).toBe(QzaILType.F16)
    expect(f32 & QzaILType.mask).toBe(QzaILType.F32)
    expect(f64 & QzaILType.mask).toBe(QzaILType.F64)
})