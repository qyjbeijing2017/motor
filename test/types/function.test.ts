import {
    QzaF16,
    QzaF32,
    qzaCreateFunction,
    QzaLocalF16,
    QzaLocalF32,
    QzaAddF16,
    QzaAddF32,
    QzaReturn,
} from '../../src'

test('default', () => {
    const FunctionOnTest = qzaCreateFunction(QzaF32, [QzaF32, QzaF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: QzaLocalF32, immediate: 0 },
        { type: QzaLocalF32, immediate: QzaF32.size },
        { type: QzaAddF32 },
        { type: QzaReturn, immediate: QzaF32.size },
    ]);
    expect(instanceOnTest.js).toEqual([
        { type: QzaLocalF32, immediate: 0 },
        { type: QzaLocalF32, immediate: QzaF32.size },
        { type: QzaAddF32 },
        { type: QzaReturn, immediate: QzaF32.size },
    ]);
})
test('set js', () => {
    const FunctionOnTest = qzaCreateFunction(QzaF32, [QzaF32, QzaF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: QzaLocalF32, immediate: 0 },
        { type: QzaLocalF32, immediate: QzaF32.size },
        { type: QzaAddF32 },
        { type: QzaReturn, immediate: QzaF32.size },
    ]);
    instanceOnTest.js = [
        { type: QzaLocalF16, immediate: 0 },
        { type: QzaLocalF16, immediate: QzaF16.size },
        { type: QzaAddF16 },
        { type: QzaReturn, immediate: QzaF16.size },
    ];
    expect(instanceOnTest.js).toEqual([
        { type: QzaLocalF16, immediate: 0 },
        { type: QzaLocalF16, immediate: QzaF16.size },
        { type: QzaAddF16 },
        { type: QzaReturn, immediate: QzaF16.size },
    ]);
})
test('call', async () => {
    const FunctionOnTest = qzaCreateFunction(QzaF32, [QzaF32]);
    const instanceOnTest = new FunctionOnTest([
        { type: QzaLocalF32, immediate: 0 },
        { type: QzaReturn, immediate: QzaF32.size },
    ]);
    const valueOnTest = await instanceOnTest.call([1]);
    expect(valueOnTest).toBe(1);
    const valueOnTest2 = await instanceOnTest.call([2]);
    expect(valueOnTest2).toBe(2);
})
