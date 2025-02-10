import { MotorInstance } from "../instance";

export abstract class MotorReference extends MotorInstance<number> {
    protected read(): number {
        return this.memory.dataView.getUint32(this.rawValue, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint32(this.rawValue, value, true);
    }
}