import { MotorType } from "../type";

export class MotorNull extends MotorType<0> {
    readonly size = 0;
    setJS(): void {
        // No operation needed for null
    }
    getJS(): 0 {
        return 0;
    }
}