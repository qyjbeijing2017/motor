import {MotorNull} from '../src'

test('Init&Read', () => {
    const val = new MotorNull();
    expect(val.read()).toBe(null);
});