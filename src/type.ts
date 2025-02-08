import { MotorBlock, MotorMemory } from "./memory";
import type { MotorInstance } from "./instance";

export interface MotorType<RawType> {
    readonly size: number;
    read: (memory: MotorMemory, block: MotorBlock) => RawType;
    write: (memory: MotorMemory, block: MotorBlock, value: RawType) => void;
    new: (defaultValue?: any, memory?: MotorMemory, block?: MotorBlock) => MotorInstance<RawType>;
}