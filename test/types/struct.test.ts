import { QzaF32, QzaI32, qzaCreateStruct, qzaCreateArray, QzaString } from '../../src'
test('default', () => {
    const ArrayType = qzaCreateArray(QzaF32, 3);
    const SubType = qzaCreateStruct({
        f: QzaF32,
        i: QzaI32,
    });
    const StructType = qzaCreateStruct({
        s: SubType,
        str: QzaString,
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
    const ArrayType = qzaCreateArray(QzaF32, 3);
    const SubType = qzaCreateStruct({
        f: QzaF32,
        i: QzaI32,
    });
    const StructType = qzaCreateStruct({
        s: SubType,
        str: QzaString,
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
    const ArrayType = qzaCreateArray(QzaF32, 3);
    const SubType = qzaCreateStruct({
        f: QzaF32,
        i: QzaI32,
    });
    const StructType = qzaCreateStruct({
        s: SubType,
        str: QzaString,
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
    const ArrayType = qzaCreateArray(QzaF32, 3);
    const SubType = qzaCreateStruct({
        f: QzaF32,
        i: QzaI32,
    });
    const StructType = qzaCreateStruct({
        s: SubType,
        str: QzaString,
        a: ArrayType,
    });
    const u8 = new StructType();
    expect(u8.get('s').js).toEqual({ f: 0, i: 0 })
    expect(u8.get('str').js).toEqual('')
    expect(u8.get('a').js).toEqual([0, 0, 0])
})
