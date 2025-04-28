import { MotorNumber } from "./number";

export class MotorI64 extends MotorNumber {
    static readonly size = 8;
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address, true));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address, BigInt(Math.floor(value)), true);
    }
}