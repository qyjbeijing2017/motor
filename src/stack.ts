import { motorCreateArray } from "./types/array";
import { MotorU8 } from "./types/number/u8";

export const MotorStack = motorCreateArray(MotorU8, 4 * 1024 * 1024); // 4MB stack