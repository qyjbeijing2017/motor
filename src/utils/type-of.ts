import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorRawOf } from "./raw-of";

export type MotorTypeOf<T extends MotorInstance<any>> = {
    readonly size: number;
    new(defaultVal?: MotorRawOf<T>, memory?: MotorMemory, address?: number): T;
}
