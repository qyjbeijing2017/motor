import { MotorReference } from "./reference";

export class MotorString  extends MotorReference<string> {
    get js(): string {
        return new TextDecoder().decode(this.memory.buffer.subarray(this.refAddress, this.refAddress + this.size));
    }
    set js(value: string) {
        this.size = value.length;
        this.memory.buffer.set(new TextEncoder().encode(value), this.refAddress);
    }
}
