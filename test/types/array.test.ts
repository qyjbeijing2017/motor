import { QzaF32, qzaCreateArray } from '../../src'
test('default', () => {
    const ArrayType = qzaCreateArray(QzaF32, 10);
    const array = new ArrayType();
    expect(array.js).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
})
test('default value', () => {
    const ArrayType = qzaCreateArray(QzaF32, 10);
    const u8 = new ArrayType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(u8.js).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
test('set js', () => {
    const ArrayType = qzaCreateArray(QzaF32, 10);
    const u8 = new ArrayType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    u8.js = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(u8.js).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})

test('at', () => {
    const ArrayType = qzaCreateArray(QzaF32, 10);
    const u8 = new ArrayType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(u8.at(0).js).toEqual(1)
    expect(u8.at(1).js).toEqual(2)
    expect(u8.at(2).js).toEqual(3)
    expect(u8.at(3).js).toEqual(4)
    expect(u8.at(4).js).toEqual(5)
    expect(u8.at(5).js).toEqual(6)
    expect(u8.at(6).js).toEqual(7)
    expect(u8.at(7).js).toEqual(8)
    expect(u8.at(8).js).toEqual(9)
    expect(u8.at(9).js).toEqual(10)
})
