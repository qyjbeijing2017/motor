import { qzaCreateArray } from "./types/array";
import { QzaU8 } from "./types/number/u8";

export const QzaStack = qzaCreateArray(QzaU8, 4 * 1024 * 1024); // 4MB stack