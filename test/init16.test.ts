import { MotorInt16 } from "../src"

test('Init&Read', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 1000);
    const val = new MotorInt16(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('Set', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 1000);
    const val = new MotorInt16(27);
    val.set(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('ToString', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 1000);
    const val = new MotorInt16(intOnTest);
    expect(val.toString()).toBe(intOnTest.toString());
})

test('float to int', () => {
    const floatOnTest = Math.random() * 1000;
    const intOnTest = Math.floor(floatOnTest);
    const val = new MotorInt16(floatOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('float to int Negative', () => {
    const floatOnTest = -Math.random() * 1000;
    const intOnTest = Math.ceil(floatOnTest);
    const val = new MotorInt16(floatOnTest);
    expect(val.read()).toBe(intOnTest);
})