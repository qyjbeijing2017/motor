import { MotorMemory } from "./memory";
import { MotorJSType, MotorType } from "./type";
import { motorSingleton } from "./utils/singleton";

export class MotorInstance<T extends MotorType<any>> {
    constructor(
        readonly type: T,
        def?: MotorJSType<T>,
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        readonly address: number = memory.allocate(type.size),
    ) {
        if (def !== undefined) {
            this.type.setJS(memory, address, def);
        }
    }
}