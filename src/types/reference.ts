import { MotorInstance } from "../instance"

export abstract class MotorReference<T> extends MotorInstance<T> {
    get refAddress(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }

    protected set refAddress(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }

    get length(): number {
        return Number(this.memory.viewer.getBigUint64(this.refAddress, true));
    }

    protected set length(value: number) {
        this.delete();
        this.refAddress = this.memory.allocate(value + 8);
        this.memory.viewer.setBigUint64(this.refAddress, BigInt(value), true);
    }

    delete(): void {
        this.memory.free(this.refAddress, this.length + 8);
        this.refAddress = 0;
    }

    free(): void {
        this.delete();
        super.free();
    }

}