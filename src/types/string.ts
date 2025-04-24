import { MotorReference } from "./reference";

export class MotorString extends MotorReference<string> {
    static readonly size = 8;
    get js(): string {
        return String.fromCharCode(...this.memory.buffer.subarray(this.refAddress + 8, this.refAddress + 8 + this.length));
    }
    set js(value: string) {
        this.length = value.length;
        for (let i = 0; i < value.length; i++) {
            this.memory.viewer.setUint8(this.refAddress + 8 + i, value.charCodeAt(i));
        }
    }
}