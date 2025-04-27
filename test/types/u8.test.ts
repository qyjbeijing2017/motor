import { MotorU8 } from '../../src'
test('default', () => {
    const u8 = new MotorU8();
    expect(u8.js).toBe(0)
})
test('default value', () => {
    const u8 = new MotorU8(255);
    expect(u8.js).toBe(255)
})
test('set js', () => {
    const u8 = new MotorU8(0);
    u8.js = 255;
    expect(u8.js).toBe(255)
})
