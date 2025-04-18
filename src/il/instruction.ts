import { MotorInstance } from "../instance";
import { MotorOperator } from "./operator";
import { MotorILType } from "./type";

export abstract class MotorInstruction extends MotorInstance<number|undefined> {
    get code(): number {
        return this.memory.viewer.getUint8(this.address);
    }
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
        // do nothing
    }
}