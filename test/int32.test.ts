import { MotorInt32 } from "../src"

test('Base test', ()=>{
    const intOnTest = Math.floor(Math.random() * 1000);
    const val = new MotorInt32(intOnTest);
    expect(val.toString()).toBe(intOnTest + '');
    
})