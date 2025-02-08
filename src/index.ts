import { MotorFloat } from "./types/float";
import { MotorPointer } from "./types/pointer";

const f1 = MotorFloat.new(2.3);
const p1 = new MotorPointer(MotorFloat).new(f1.address);
console.log(p1.value); // 0
console.log(p1.raw.value); // 2.3