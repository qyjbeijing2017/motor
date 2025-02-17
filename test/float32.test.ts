import { MotorFloat32 } from "../src";

test('Init&Read', () => {
    const floatOnTest = Math.random() * 1000;
    const val = new MotorFloat32(floatOnTest);
    expect(val.read()).toBeCloseTo(floatOnTest);
});

test('Set', () => {
    const floatOnTest = Math.random() * 1000;
    const val = new MotorFloat32(27);
    val.set(floatOnTest);
    expect(val.read()).toBeCloseTo(floatOnTest);
});

test('ToString', () => {
    const floatOnTest = Math.random() * 1000;
    const val = new MotorFloat32(floatOnTest);
    expect(parseFloat(val.toString()).toFixed(2)).toBe(floatOnTest.toFixed(2));
});