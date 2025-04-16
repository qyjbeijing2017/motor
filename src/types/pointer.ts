import { MotorType } from "../type";
import { MotorMemory } from "../memory";

export class Pointer<T extends MotorType<any>> extends MotorType<number> {
    constructor(readonly type: T) {
        super();
    }
    readonly size = 8;

    setJS(memory: MotorMemory, address: number, value: number): void {
        memory.viewer.setBigUint64(address, BigInt(value), true);
    }

    getJS(memory: MotorMemory, address: number): number {
        return Number(memory.viewer.getBigInt64(address, true));
    }
}