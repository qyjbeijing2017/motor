import { MotorInstance } from "../instance";

export class MotorBool extends MotorInstance<boolean> {
    write(value: boolean): void {
        this.memory.buffer[this.address] = value ? 1 : 0;
    }
    read(): boolean {
        return this.memory.buffer[this.address] === 1;
    }
    static size = 1;
}