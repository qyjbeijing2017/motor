import { MotorInstance } from "../instance";

export class MotorChar extends MotorInstance<string> {
    static size = 1;
    write(value: string): void {
        this.memory.buffer[this.address] = value.charCodeAt(0);
    }
    read(): string {
        return String.fromCharCode(this.memory.buffer[this.address]);
    }
}