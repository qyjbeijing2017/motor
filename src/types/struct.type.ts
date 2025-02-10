// import { MotorInstance } from "../instance";
// import { MotorMemory } from "../memory";
// import { motorSingleton } from "../utils/singleton";
// import { MotorTypeOf } from "../utils/type-of";
// import { MotorValue } from "./value.type";

// export type MotorStructInstance<RawType extends object> = {
//     [key in keyof RawType]: MotorInstance<RawType[key]>;
// }

// export type MotorStructType<RawType extends object, MotorStructInstanceType extends MotorStructInstance<RawType> = MotorStructInstance<RawType>> = {
//     [key in keyof MotorStructInstanceType]: MotorTypeOf<any, MotorStructInstanceType[key]>;
// };


// export function motorDefineStruct<RawType extends object, MotorStructInstanceType extends MotorStructInstance<RawType> = MotorStructInstance<RawType>>(
//     definition: MotorStructType<RawType, MotorStructInstanceType>
// ) {
//     let structSize = 0;
//     for (const key in definition) {
//         structSize += definition[key].size;
//     }
//     return class extends MotorValue {
//         static readonly size = structSize;
//         get(key: keyof MotorStructInstanceType) {
//             let offset = 0;
//             for (const k in definition) {
//                 if (k === key) {
//                     return new definition[k](undefined, this.memory, this.address + offset);
//                 }
//                 offset += definition[k].size;
//             }
//             throw new Error(`Key ${key.toString()} not found in struct`);
//         }
//         constructor(
//             defaultValue?: RawType,
//             memory: MotorMemory = motorSingleton(MotorMemory),
//             address: number = memory.allocate(structSize)
//         ) {
//             super(memory, address);
//             if (defaultValue) {
//                 for (const key in definition) {
//                     this.get(key).rawValue = defaultValue[key];
//                 }
//             }
//         }
//     };
// }
