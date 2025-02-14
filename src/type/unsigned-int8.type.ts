import { MotorInstance } from "../instance.js";

export class MotorUnsignedInt8 extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setUint8(this.address, value);
    }
    read(): number {
        return this.memory.dataView.getUint8(this.address);
    }
    static size = 1;
}
