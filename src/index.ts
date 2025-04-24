export { MotorMemory } from './memory';
export { motorSingleton } from './utils/singleton';
export { motorSetFloat8, motorGetFloat8 } from './utils/float8';

export { MotorOperator } from './il/operator';
export { MotorILType } from './il/type';
export { MotorInstruction } from './il/instruction';
export { MotorPushU8, MotorPushU16, MotorPushU32, MotorPushU64, MotorPushI8, MotorPushI16, MotorPushI32, MotorPushI64, MotorPushF8, MotorPushF16, MotorPushF32, MotorPushF64 } from './il/instructions/push';
export { MotorPopU8, MotorPopU16, MotorPopU32, MotorPopU64, MotorPopI8, MotorPopI16, MotorPopI32, MotorPopI64, MotorPopF8, MotorPopF16, MotorPopF32, MotorPopF64 } from './il/instructions/pop';
export { MotorLocalU8, MotorLocalU16, MotorLocalU32, MotorLocalU64, MotorLocalI8, MotorLocalI16, MotorLocalI32, MotorLocalI64, MotorLocalF8, MotorLocalF16, MotorLocalF32, MotorLocalF64 } from './il/instructions/local';
export { MotorCall } from './il/instructions/call';
export { MotorReturn } from './il/instructions/return';
export { MotorAddU8, MotorAddU16, MotorAddU32, MotorAddU64, MotorAddI8, MotorAddI16, MotorAddI32, MotorAddI64, MotorAddF8, MotorAddF16, MotorAddF32, MotorAddF64 } from './il/instructions/add';


export { MotorInstance, MotorType, motorTypeOf } from './instance';
export { MotorU8, MotorU16, MotorU32, MotorU64 } from './types/unsigned';
export { MotorI8, MotorI16, MotorI32, MotorI64 } from './types/int';
export { MotorF8, MotorF16, MotorF32, MotorF64 } from './types/float';
export { MotorStruct, MotorStructMemberType, MotorStructJsType, MotorStructType, motorCreateStruct } from './types/struct';
export { MotorArray, MotorArrayType, motorCreateArray } from './types/array';
export { MotorString } from './types/string';
export { MotorReference } from './types/reference';
export { MotorPointer, MotorPointerType, motorCreatePointer } from './types/pointer';
export { MotorFunction, MotorFunctionType, motorCreateFunction } from './types/function';
export { MotorNull } from './types/null';

export { MotorRuntime } from './runtime';
export { MotorStack } from './stack';
