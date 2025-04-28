export { MotorMemory } from './memory';
export { motorSingleton } from './utils/singleton';
export { motorSetFloat8, motorGetFloat8 } from './utils/float8';

export { MotorOperator } from './il/operator';
export { MotorILType } from './il/type';

export { MotorPushU8, MotorPushU16, MotorPushU32, MotorPushU64, MotorPushI8, MotorPushI16, MotorPushI32, MotorPushI64, MotorPushF8, MotorPushF16, MotorPushF32, MotorPushF64 } from './il/instructions/push';
export { MotorPopU8, MotorPopU16, MotorPopU32, MotorPopU64, MotorPopI8, MotorPopI16, MotorPopI32, MotorPopI64, MotorPopF8, MotorPopF16, MotorPopF32, MotorPopF64 } from './il/instructions/pop';

export { MotorStoreU8, MotorStoreU16, MotorStoreU32, MotorStoreU64, MotorStoreI8, MotorStoreI16, MotorStoreI32, MotorStoreI64, MotorStoreF8, MotorStoreF16, MotorStoreF32, MotorStoreF64 } from './il/instructions/store';
export { MotorLoadU8, MotorLoadU16, MotorLoadU32, MotorLoadU64, MotorLoadI8, MotorLoadI16, MotorLoadI32, MotorLoadI64, MotorLoadF8, MotorLoadF16, MotorLoadF32, MotorLoadF64 } from './il/instructions/load';

export { MotorLocalU8, MotorLocalU16, MotorLocalU32, MotorLocalU64, MotorLocalI8, MotorLocalI16, MotorLocalI32, MotorLocalI64, MotorLocalF8, MotorLocalF16, MotorLocalF32, MotorLocalF64 } from './il/instructions/local';
export { MotorCall } from './il/instructions/call';
export { MotorReturn } from './il/instructions/return';

export { MotorJump } from './il/instructions/jump';
export { MotorIfNotZeroU8, MotorIfNotZeroU16, MotorIfNotZeroU32, MotorIfNotZeroU64, MotorIfNotZeroI8, MotorIfNotZeroI16, MotorIfNotZeroI32, MotorIfNotZeroI64, MotorIfNotZeroF8, MotorIfNotZeroF16, MotorIfNotZeroF32, MotorIfNotZeroF64 } from './il/instructions/if_not_zero';

export { MotorAddU8, MotorAddU16, MotorAddU32, MotorAddU64, MotorAddI8, MotorAddI16, MotorAddI32, MotorAddI64, MotorAddF8, MotorAddF16, MotorAddF32, MotorAddF64 } from './il/instructions/add';
export { MotorSubU8, MotorSubU16, MotorSubU32, MotorSubU64, MotorSubI8, MotorSubI16, MotorSubI32, MotorSubI64, MotorSubF8, MotorSubF16, MotorSubF32, MotorSubF64 } from './il/instructions/sub';
export { MotorMulU8, MotorMulU16, MotorMulU32, MotorMulU64, MotorMulI8, MotorMulI16, MotorMulI32, MotorMulI64, MotorMulF8, MotorMulF16, MotorMulF32, MotorMulF64 } from './il/instructions/mul';
export { MotorDivU8, MotorDivU16, MotorDivU32, MotorDivU64, MotorDivI8, MotorDivI16, MotorDivI32, MotorDivI64, MotorDivF8, MotorDivF16, MotorDivF32, MotorDivF64 } from './il/instructions/div';
export { MotorModU8, MotorModU16, MotorModU32, MotorModU64, MotorModI8, MotorModI16, MotorModI32, MotorModI64, MotorModF8, MotorModF16, MotorModF32, MotorModF64 } from './il/instructions/mod';

export { MotorGreaterU8, MotorGreaterU16, MotorGreaterU32, MotorGreaterU64, MotorGreaterI8, MotorGreaterI16, MotorGreaterI32, MotorGreaterI64, MotorGreaterF8, MotorGreaterF16, MotorGreaterF32, MotorGreaterF64 } from './il/instructions/greater';
export { MotorLessU8, MotorLessU16, MotorLessU32, MotorLessU64, MotorLessI8, MotorLessI16, MotorLessI32, MotorLessI64, MotorLessF8, MotorLessF16, MotorLessF32, MotorLessF64 } from './il/instructions/less';
export { MotorGreaterEqualU8, MotorGreaterEqualU16, MotorGreaterEqualU32, MotorGreaterEqualU64, MotorGreaterEqualI8, MotorGreaterEqualI16, MotorGreaterEqualI32, MotorGreaterEqualI64, MotorGreaterEqualF8, MotorGreaterEqualF16, MotorGreaterEqualF32, MotorGreaterEqualF64 } from './il/instructions/greater_equal';
export { MotorLessEqualU8, MotorLessEqualU16, MotorLessEqualU32, MotorLessEqualU64, MotorLessEqualI8, MotorLessEqualI16, MotorLessEqualI32, MotorLessEqualI64, MotorLessEqualF8, MotorLessEqualF16, MotorLessEqualF32, MotorLessEqualF64 } from './il/instructions/less_equal';
export { MotorEqualU8, MotorEqualU16, MotorEqualU32, MotorEqualU64, MotorEqualI8, MotorEqualI16, MotorEqualI32, MotorEqualI64, MotorEqualF8, MotorEqualF16, MotorEqualF32, MotorEqualF64 } from './il/instructions/equal';
export { MotorNotEqualU8, MotorNotEqualU16, MotorNotEqualU32, MotorNotEqualU64, MotorNotEqualI8, MotorNotEqualI16, MotorNotEqualI32, MotorNotEqualI64, MotorNotEqualF8, MotorNotEqualF16, MotorNotEqualF32, MotorNotEqualF64 } from './il/instructions/not_equal';
export { MotorAndU8, MotorAndU16, MotorAndU32, MotorAndU64, MotorAndI8, MotorAndI16, MotorAndI32, MotorAndI64 } from './il/instructions/and';
export { MotorOrU8, MotorOrU16, MotorOrU32, MotorOrU64, MotorOrI8, MotorOrI16, MotorOrI32, MotorOrI64 } from './il/instructions/or';
export { MotorXorU8, MotorXorU16, MotorXorU32, MotorXorU64, MotorXorI8, MotorXorI16, MotorXorI32, MotorXorI64 } from './il/instructions/xor';
export { MotorNotU8, MotorNotU16, MotorNotU32, MotorNotU64, MotorNotI8, MotorNotI16, MotorNotI32, MotorNotI64 } from './il/instructions/not';

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
export { MotorFunction, MotorFunctionType, motorCreateFunction } from './types/function';


export { MotorInstruction } from './il/instruction';

export { MotorRuntime } from './runtime'
export { MotorStack } from './stack'



