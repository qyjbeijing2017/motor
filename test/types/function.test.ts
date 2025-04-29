import {
    MotorF16,
    MotorF32,
    motorCreateFunction,
    MotorLocalF16,
    MotorLocalF32,
    MotorAddF16,
    MotorAddF32,
    MotorReturn,
} from '../../src'

test('default', () => {
    const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: MotorLocalF32, immediate: 0 },
        { type: MotorLocalF32, immediate: MotorF32.size },
        { type: MotorAddF32 },
        { type: MotorReturn, immediate: MotorF32.size },
    ]);
    expect(instanceOnTest.js).toEqual([
        { type: MotorLocalF32, immediate: 0 },
        { type: MotorLocalF32, immediate: MotorF32.size },
        { type: MotorAddF32 },
        { type: MotorReturn, immediate: MotorF32.size },
    ]);
})
test('set js', () => {
    const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32, MotorF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: MotorLocalF32, immediate: 0 },
        { type: MotorLocalF32, immediate: MotorF32.size },
        { type: MotorAddF32 },
        { type: MotorReturn, immediate: MotorF32.size },
    ]);
    instanceOnTest.js = [
        { type: MotorLocalF16, immediate: 0 },
        { type: MotorLocalF16, immediate: MotorF16.size },
        { type: MotorAddF16 },
        { type: MotorReturn, immediate: MotorF16.size },
    ];
    expect(instanceOnTest.js).toEqual([
        { type: MotorLocalF16, immediate: 0 },
        { type: MotorLocalF16, immediate: MotorF16.size },
        { type: MotorAddF16 },
        { type: MotorReturn, immediate: MotorF16.size },
    ]);
})
test('call', async () => {
    const FunctionOnTest = motorCreateFunction(MotorF32, [MotorF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: MotorLocalF32, immediate: 0 },
        { type: MotorReturn, immediate: MotorF32.size },
    ]);
    const valueOnTest = await instanceOnTest.call([1]);
    expect(valueOnTest).toBe(1);
    const valueOnTest2 = await instanceOnTest.call([2]);
    expect(valueOnTest2).toBe(2);
})
