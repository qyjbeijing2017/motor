import { MotorF32, MotorString, motorCreateMap } from '../../src'
test('default', () => {
    const MapType = motorCreateMap(MotorString, MotorF32);
    const map = new MapType();
    expect(map.js).toEqual([])
})
test('default value', () => {
    const MapType = motorCreateMap(MotorString, MotorF32);
    const map = new MapType([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);
    expect(map.js).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ])
})
test('set js', () => {
    const MapType = motorCreateMap(MotorString, MotorF32);
    const map = new MapType([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);
    map.js = [
        ['d', 4],
        ['e', 5],
        ['f', 6]
    ];
    expect(map.js).toEqual([
        ['d', 4],
        ['e', 5],
        ['f', 6]
    ])
})
test('get', () => {
    const MapType = motorCreateMap(MotorString, MotorF32);
    const map = new MapType([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);
    expect(map.get('a').js).toBe(1)
    expect(map.get('b').js).toBe(2)
    expect(map.get('c').js).toBe(3)
})
test('set', () => {
    const MapType = motorCreateMap(MotorString, MotorF32);
    const map = new MapType([
        ['a', 1],
        ['b', 2],
        ['c', 3]
    ]);
    map.set('a', 4)
    expect(map.get('a').js).toBe(4)
    map.set('d', 5)
    expect(map.get('d').js).toBe(5)
})