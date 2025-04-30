import { MotorString } from '../../src'
test('default', () => {
    const str = new MotorString();
    expect(str.js).toEqual('')
})
test('default value', () => {
    const str = new MotorString('hello world');
    expect(str.js).toEqual('hello world');
})
test('set value', () => {
    const str = new MotorString('hello world');
    str.js = 'love you';
    expect(str.js).toEqual('love you');
})
