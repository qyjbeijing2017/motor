import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export type MotorTypeOf<T extends new (defaultVal: any, memory?: MotorMemory, address?: number) => MotorInstance<any>> = {
    readonly size: number;
    new(defaultVal?: ConstructorParameters<T>[0], memory?: MotorMemory, address?: number): T;
}
