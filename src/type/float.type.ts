import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorFloat extends MotorInstance {
    static size = 4;
    get jsVal() {
        return this.memory.dataView.getFloat32(this.address, true);
    }
    constructor(def?: MotorFloat | number, memory?: MotorMemory, address?: number) {
        super(def, memory, address);
        if(typeof def === "number") this.memory.dataView.setFloat32(def, this.address, true);
    }
}