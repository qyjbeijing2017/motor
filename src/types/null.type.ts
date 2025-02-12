import { MotorInstance } from "../instance";

export class MotorNull extends MotorInstance<null> {
    protected read(): null {
        return null;
    }
    protected write(value: null): void {
        return;
    }
    static readonly size = 0;
}