import { MotorChar } from "./types/char.type";
import { MotorInteger } from "./types/integer.type";
import { MotorStruct } from "./types/struct.type";

const S1 = MotorStruct.define({
    name: MotorChar,
    length: MotorInteger
})

const s1 = new S1({
    name: "J",
    length: 4
})

console.log(s1.get('name').rawValue)
console.log(s1.get('length').rawValue)
