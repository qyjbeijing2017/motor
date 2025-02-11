import { MotorFloat } from "./types/float.type";
import { MotorReference } from "./reference";

const a = new MotorReference(MotorFloat, 0.5)
const b = new MotorReference(MotorFloat, a)
console.log(b.rawValue) // 0.5