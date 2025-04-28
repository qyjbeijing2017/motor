export { MotorMemory } from './memory';
export { motorSingleton } from './utils/singleton';
export { motorSetFloat8, motorGetFloat8 } from './utils/float8';

export { MotorOperator } from './il/operator';
export { MotorILType } from './il/type';

export { MotorNull } from './types/null';
export { MotorU8 } from './types/number/u8';
export { MotorU16 } from './types/number/u16';
export { MotorU32 } from './types/number/u32';
export { MotorU64 } from './types/number/u64';
export { MotorI8 } from './types/number/i8';
export { MotorI16 } from './types/number/i16';
export { MotorI32 } from './types/number/i32';
export { MotorI64 } from './types/number/i64';
export { MotorF8 } from './types/number/f8';
export { MotorF16 } from './types/number/f16';
export { MotorF32 } from './types/number/f32';
export { MotorF64 } from './types/number/f64';

export { MotorPointer, MotorPointerType, motorCreatePointer } from './types/pointer';
export { MotorArray, MotorArrayType, motorCreateArray } from './types/array';
export { MotorStruct, MotorStructType, motorCreateStruct } from './types/struct';
export { MotorMap, MotorMapType, motorCreateMap } from './types/map';

export { MotorReference } from './types/reference';
export { MotorString } from './types/string';
export { MotorList, MotorListType, motorCreateList } from './types/list';
