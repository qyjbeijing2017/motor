import { MotorInt64 } from "../src"

test('Init&Read', () => {
    const intOnTest = 2n ** 54n;
    const val = new MotorInt64(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('Set', () => {
    const intOnTest = 2n ** 54n;
    const val = new MotorInt64(27n);
    val.set(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('ToString', () => {
    const intOnTest = 2n ** 54n;
    const val = new MotorInt64(intOnTest);
    expect(val.toString()).toBe(intOnTest.toString());
})
