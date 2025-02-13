import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorChar extends MotorInstance {
    static size = 1;
    get jsVal() {
        return String.fromCharCode(this.memory.buffer[this.address]);
    }
    constructor(def?: MotorChar | string, memory?: MotorMemory, address?: number) {
        super(def, memory, address);
        if(typeof def === "string") this.memory.buffer[this.address] = def.charCodeAt(0);
    }
}