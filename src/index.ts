import { MotorString } from "./types/string.type";

const str = new MotorString('123');
str.rawValue = '7890';
console.log(str.rawValue);
console.log(str.memory)