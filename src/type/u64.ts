import { MotorInstance } from "../instance";

export class MotorU64 extends MotorInstance<number> {
    static readonly size = 8;
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }
}