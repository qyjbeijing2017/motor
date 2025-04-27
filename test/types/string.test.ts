import { MotorString } from '../../src'
test('default', () => {
    const str = new MotorString();
    expect(str.js).toEqual('')
})
test('default value', () => {
    const str = new MotorString('hello world');
    expect(str.js).toEqual('hello world');
})
