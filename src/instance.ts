import { MotorMemory } from "./memory";
import { motorAssertType } from "./utils/assert-type";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance {
    set(val: MotorInstance): void {
        this.memory.copy(val.address, this.address, motorAssertType(this.constructor).size);
    }

    constructor(
        def?: any, 
        readonly memory: MotorMemory = motorSingleton(MotorMemory), 
        readonly address: number = memory.allocate(motorAssertType(this.constructor).size)
    ) {
        if(def instanceof MotorInstance) this.set(def);
    }
}