import { MotorMemory } from "../../memory";
import { MotorInstruction } from "../instruction";

export abstract class MotorCodeInstruction extends MotorInstruction {
    readonly size: number = 2;
    abstract readonly code: number;
    setJS(memory: MotorMemory, address: number): void {
        memory.viewer.setUint16(address, this.code, true);
    }
    getJS(): undefined {
        return undefined;
    }
}