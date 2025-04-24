import { MotorReference } from "./reference";

export class MotorString extends MotorReference<string> {
    static readonly size = 8;
    get js(): string {
        if (this.memoryAddress === 0) {
            return "";
        }
        return String.fromCharCode(...this.memory.buffer.subarray(this.refAddress, this.refAddress + this.length));
    }
    set js(value: string) {
        this.length = value.length;
        for (let i = 0; i < value.length; i++) {
            this.memory.viewer.setUint8(this.refAddress + i, value.charCodeAt(i));
        }
    }
}