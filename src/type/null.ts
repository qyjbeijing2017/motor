import { MotorInstance } from "../instance";

export class MotorNull extends MotorInstance<null> {
    static readonly size = 0;
    get js(): null {
        return null;
    }
}