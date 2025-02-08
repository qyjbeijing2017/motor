import { ELMemory } from "./memory";
import { ELFloat } from "./type/float";

const storage = new ELMemory();
const f1 = new ELFloat(1.0, storage);
console.log(f1.value);
f1.value = 2.0;
console.log(f1.value);
console.log(f1.equals(new ELFloat(2.0, storage)));
