import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export type MotorTypeOf<T extends MotorInstance<any>> = {
    readonly size: number;
    new (defaultVal: any, memory?: MotorMemory, address?: number): T;
}
