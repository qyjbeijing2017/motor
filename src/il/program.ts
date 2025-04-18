import { MotorInstance } from "../instance";

export class MotorProgram extends MotorInstance<number> {
    static readonly size = 8;
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
}