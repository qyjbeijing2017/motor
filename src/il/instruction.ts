import { MotorInstance } from "../instance";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorInstance<number | undefined> {
    abstract readonly code: number;
    get operator(): number {
        return this.code & MotorOperator.operator_mask;
    }
    get ILType(): number {
        return this.code & MotorILType.type_mask;
    }
    get js(): number | undefined {
        return undefined;
    }
    set js(value: number | undefined) {
        this.memory.viewer.setUint16(this.address, this.code);
        this.setImmediate(value);
    }
    setImmediate(value?: number): void {
        // TODO: Implement this method
    }
}