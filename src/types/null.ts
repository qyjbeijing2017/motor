import { MotorType } from "../type";

export class MotorNull extends MotorType<null> {
    readonly size = 0;
    setJS(): void {
        // No operation needed for null
    }
    getJS(): null {
        return null;
    }
}