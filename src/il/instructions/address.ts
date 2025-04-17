import { MotorMemory } from "../../memory";
import { MotorInstruction } from "../instruction";

export abstract class MotorAddressInstruction extends MotorInstruction {
    readonly size: number = 10;
    abstract readonly code: number;
    setJS(memory: MotorMemory, address: number): void {
        memory.viewer.setUint16(address, this.code, true);
        memory.viewer.setBigUint64(address + 2, BigInt(address), true);
    }
    getJS(memory: MotorMemory, address: number): number {
        return Number(memory.viewer.getBigUint64(address + 2, true));
    }
}