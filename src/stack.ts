import { MotorMemory } from "./memory";
import { MotorType } from "./type";

export class MotorStack extends MotorType<Uint8Array> {
    setJS(memory: MotorMemory, address: number, value: Uint8Array<ArrayBufferLike>): void {
        if (value.length > this.size) {
            throw new Error("Stack overflow");
        }
        memory.buffer.set(value, address);
    }
    getJS(memory: MotorMemory, address: number): Uint8Array<ArrayBufferLike> {
        return memory.buffer.slice(address, address + this.size);
    }
    constructor(readonly size: number = 1024 * 1024) {
        super();
    }
}
