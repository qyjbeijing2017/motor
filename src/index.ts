import { MotorArray } from "./types/array.type";
import { MotorBool } from "./types/bool.type";
import { MotorChar } from "./types/char.type";
import { MotorFloat } from "./types/float.type";
import { motorDefineStruct } from "./types/struct.type";

const Struct1 = motorDefineStruct({
    f1: MotorFloat,
    b1: MotorBool,
    c1: MotorChar,
})

const a1 = new MotorArray(Struct1, 3);
a1.at(0).get('f1').rawValue = 1.1;
a1.at(0).get('b1').rawValue = true;
a1.at(0).get('c1').rawValue = 'a';

a1.at(1).get('f1').rawValue = 2.2;
a1.at(1).get('b1').rawValue = false;
a1.at(1).get('c1').rawValue = 'b';

a1.at(2).get('f1').rawValue = 3.3;
a1.at(2).get('b1').rawValue = true;
a1.at(2).get('c1').rawValue = 'c';

console.log(a1.at(0).get('f1').rawValue);
console.log(a1.at(0).get('b1').rawValue);
console.log(a1.at(0).get('c1').rawValue);

console.log(a1.at(1).get('f1').rawValue);
console.log(a1.at(1).get('b1').rawValue);
console.log(a1.at(1).get('c1').rawValue);

console.log(a1.at(2).get('f1').rawValue);
console.log(a1.at(2).get('b1').rawValue);
console.log(a1.at(2).get('c1').rawValue);
