import { MotorF32, MotorI32, motorCreateStruct, motorCreateArray, MotorString } from '../../src'
test('default', () => {
    const ArrayType = motorCreateArray(MotorF32, 3);
    const SubType = motorCreateStruct({
        f: MotorF32,
        i: MotorI32,
    });
    const StructType = motorCreateStruct({
        s: SubType,
        str: MotorString,
        a: ArrayType,
    });
    const array = new StructType();
    expect(array.js).toEqual({
        s: { f: 0, i: 0 },
        str: '',
        a: [0, 0, 0],
    })
})
test('default value', () => {
    const ArrayType = motorCreateArray(MotorF32, 3);
    const SubType = motorCreateStruct({
        f: MotorF32,
        i: MotorI32,
    });
    const StructType = motorCreateStruct({
        s: SubType,
        str: MotorString,
        a: ArrayType,
    });
    const u8 = new StructType({
        s: { f: 1, i: 2 },
        str: 'hello',
        a: [1, 2, 3],
    });
    expect(u8.js).toEqual({
        s: { f: 1, i: 2 },
        str: 'hello',
        a: [1, 2, 3],
    })
})
test('set js', () => {
    const ArrayType = motorCreateArray(MotorF32, 3);
    const SubType = motorCreateStruct({
        f: MotorF32,
        i: MotorI32,
    });
    const StructType = motorCreateStruct({
        s: SubType,
        str: MotorString,
        a: ArrayType,
    });
    const u8 = new StructType();
    u8.js = {
        s: { f: 1, i: 2 },
        str: 'hello',
        a: [1, 2, 3],
    };
    expect(u8.js).toEqual({
        s: { f: 1, i: 2 },
        str: 'hello',
        a: [1, 2, 3],
    })
})
test('get', () => {
    const ArrayType = motorCreateArray(MotorF32, 3);
    const SubType = motorCreateStruct({
        f: MotorF32,
        i: MotorI32,
    });
    const StructType = motorCreateStruct({
        s: SubType,
        str: MotorString,
        a: ArrayType,
    });
    const u8 = new StructType();
    expect(u8.get('s').js).toEqual({ f: 0, i: 0 })
    expect(u8.get('str').js).toEqual('')
    expect(u8.get('a').js).toEqual([0, 0, 0])
})
