import { MotorInstance } from "../instance";

export class MotorNull extends MotorInstance<null> {
    static readonly size = 0;
    protected read(): null {
        return null;
    }
    protected write(value: null): void {
        return;
    }
}