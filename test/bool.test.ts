import { MotorBool } from "../src";

test('Init&Read', () => {
    const boolOnTest = Math.random() > 0.5;
    const val = new MotorBool(boolOnTest);
    expect(val.read()).toBe(boolOnTest);
});

test('Set', () => {
    const boolOnTest = Math.random() > 0.5;
    const val = new MotorBool(!boolOnTest);
    val.set(boolOnTest);
    expect(val.read()).toBe(boolOnTest);
});

test('ToString', () => {
    const boolOnTest = Math.random() > 0.5;
    const val = new MotorBool(boolOnTest);
    expect(val.toString()).toBe(boolOnTest.toString());
});