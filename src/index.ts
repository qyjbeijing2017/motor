import { MotorString } from "./type/references/string.ref";

const s1 = new MotorString('Alice');
const s2 = new MotorString('Bob');
s1.set('Alice11111');

console.log(s1.toString()); // Alice
console.log(s2.toString()); // Bob