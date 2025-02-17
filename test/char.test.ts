import { MotorChar } from "../src";

test('Init&Read', () => {
    const charOnTest = String.fromCharCode(Math.floor(Math.random() * 256));
    const val = new MotorChar(charOnTest);
    expect(val.read()).toBe(charOnTest);
});

test('Set', () => {
    const charOnTest = String.fromCharCode(Math.floor(Math.random() * 256));
    const val = new MotorChar(String.fromCharCode(Math.floor(Math.random() * 256)));
    val.set(charOnTest);
    expect(val.read()).toBe(charOnTest);
});

test('ToString', () => {
    const charOnTest = String.fromCharCode(Math.floor(Math.random() * 256));
    const val = new MotorChar(charOnTest);
    expect(val.toString()).toBe(charOnTest);
});
