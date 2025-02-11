import { motorDefineArray } from "./types/array.type";
import { MotorChar } from "./types/char.type";
import { MotorInteger } from "./types/integer.type";
import { motorDefineStruct } from "./types/struct.type";

const Struct = motorDefineStruct({
    name: motorDefineArray(MotorChar, 11),
    age: MotorInteger,
});

const A = motorDefineArray(Struct, 2);
const a = new A([
    {
        name: ["John", "D"],
        age: 21,
    },
    {
        name: ["Jane", "Soe"],
        age: 22,
    },
])
console.log(a.rawValue);