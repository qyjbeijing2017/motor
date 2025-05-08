import { QzaString } from '../../src'
test('default', () => {
    const str = new QzaString();
    expect(str.js).toEqual('')
})
test('default value', () => {
    const str = new QzaString('hello world');
    expect(str.js).toEqual('hello world');
})
test('set value', () => {
    const str = new QzaString('hello world');
    str.js = 'love you';
    expect(str.js).toEqual('love you');
})
