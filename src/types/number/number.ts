import { MotorInstance } from "../../instance";

export abstract class MotorNumber extends MotorInstance<number> {
    equal(other: MotorInstance<number>): boolean {
        return this.js === other.js;
    }
}