import { MotorMemory } from "../memory";
import { motorSingleton } from "../utils/singleton";


export class MotorRuntime {
    constructor(
        stackSize: number = 1024,
        readonly memory: MotorMemory = motorSingleton(MotorMemory), 
        readonly address: number = memory.allocate(stackSize)
    ) {

    }
}