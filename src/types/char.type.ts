import { MotorInstance } from "../instance";

export class MotorChar extends MotorInstance<string> {
    static readonly size = 1;
    protected read(): string {
        return String.fromCharCode(this.memory.dataView.getUint8(this.address));
    }
    protected write(value?: string): void {
        this.memory.dataView.setUint8(this.address, value ? value.charCodeAt(0) : 0);
    }
}