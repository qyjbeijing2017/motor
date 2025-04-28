import { MotorF32, motorCreateList } from '../../src'
test('default', () => {
    const ListType = motorCreateList(MotorF32);
    const array = new ListType();
    expect(array.js).toEqual([])
})
test('default value', () => {
    const ListType = motorCreateList(MotorF32);
    const u8 = new ListType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(u8.js).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
test('set js', () => {
    const ListType = motorCreateList(MotorF32);
    const u8 = new ListType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    u8.js = [10, 9, 8, 7, 6, 5, 4];
    expect(u8.js).toEqual([10, 9, 8, 7, 6, 5, 4])
})
test('at', () => {
    const ListType = motorCreateList(MotorF32);
    const u8 = new ListType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(u8.js).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
