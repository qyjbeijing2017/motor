import { MotorInstance } from "../instance";

export class MotorI64 extends MotorInstance<number> {
    static readonly size = 8;
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address, BigInt(value), true);
    }
}