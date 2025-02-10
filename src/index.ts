import { motorNewArray, motorDefineArray } from "./types/array.type";
import { MotorChar } from "./types/char.type";
import { motorDefineStruct } from "./types/struct.type";

const a1 = new (motorDefineArray(MotorChar, 3))(['1', '2', '3']);
a1.at(0)

export interface TestType {
    a: number;
    b: string;
}

const S1 = motorDefineStruct({
    start: MotorChar,
})
const s1 = new S1({
    start: 'H',
});
console.log(s1.get('start').rawValue); // H

const a2 = motorNewArray(MotorChar, 3, ['1', '2', '3']);
console.log(a2.at(0).rawValue);