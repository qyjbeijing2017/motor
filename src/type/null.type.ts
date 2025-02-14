import { MotorInstance } from "../instance";

export class MotorNull extends MotorInstance<null> {
    write(value: null): void {
    }
    read(): null {
        return null;
    }
    static size = 0;
}
