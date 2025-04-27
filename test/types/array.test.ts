import { MotorF32, motorCreateArray } from '../../src'
test('default', () => {
    const ArrayType = motorCreateArray(MotorF32, 10);
    const array = new ArrayType();
    expect(array.js).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
})
test('default value', () => {
    const ArrayType = motorCreateArray(MotorF32, 10);
    const u8 = new ArrayType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(u8.js).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
test('set js', () => {
    const ArrayType = motorCreateArray(MotorF32, 10);
    const u8 = new ArrayType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    u8.js = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(u8.js).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
})
