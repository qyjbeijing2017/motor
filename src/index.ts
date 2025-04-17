export { MotorMemory } from './memory';
export { motorSingleton } from './utils/singleton';
export { motorSetFloat8, motorGetFloat8 } from './utils/float8';

export { MotorOperator } from './il/operator';
export { MotorILType } from './il/type';

export { MotorInstance } from './instance';
export { MotorType } from './type';

export { MotorU8, MotorU16, MotorU32, MotorU64 } from './types/unsigned';
export { MotorI8, MotorI16, MotorI32, MotorI64 } from './types/int';
export { MotorF8, MotorF16, MotorF32, MotorF64 } from './types/float';
export { MotorNull } from './types/null';
export { MotorPointer } from './types/pointer';
export { MotorArray } from './types/array';
export { MotorStruct } from './types/struct';
