import { MotorInstance } from "./instance";

export class MotorStack extends MotorInstance<Uint8Array> {
    readonly size = 4 * 1024 * 1024; // 4MB
    get js(): Uint8Array<ArrayBufferLike> {
        return this.memory.buffer.subarray(this.address, this.address + this.size);
    }
    set js(value: Uint8Array<ArrayBufferLike>) {
        value = value.subarray(0, this.size);
        this.memory.buffer.set(value, this.address);
    }
}