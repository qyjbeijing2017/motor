import { MotorInt8 } from "../src"

test('Init&Read', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 10);
    const val = new MotorInt8(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('Set', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 10);
    const val = new MotorInt8(27);
    val.set(intOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('ToString', () => {
    const intOnTest = Math.floor((Math.random() - 0.5) * 10);
    const val = new MotorInt8(intOnTest);
    expect(val.toString()).toBe(intOnTest.toString());
})

test('float to int', () => {
    const floatOnTest = Math.random() * 10;
    const intOnTest = Math.floor(floatOnTest);
    const val = new MotorInt8(floatOnTest);
    expect(val.read()).toBe(intOnTest);
})

test('float to int Negative', () => {
    const floatOnTest = -Math.random() * 10;
    const intOnTest = Math.ceil(floatOnTest);
    const val = new MotorInt8(floatOnTest);
    expect(val.read()).toBe(intOnTest);
})