import { MotorInstance } from "../instance";

export abstract class MotorReference<T> extends MotorInstance<T> {
    get blockAddress() {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }

    private set blockAddress(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }

    get size() {
        if(this.blockAddress === 0) {
            return 0;
        }
        return Number(this.memory.viewer.getBigUint64(this.blockAddress, true));
    }

    protected set size(value: number) {
        this.memory.free(this.blockAddress, this.size);
        this.blockAddress = this.memory.allocate(value)
        this.memory.viewer.setBigUint64(this.blockAddress, BigInt(value), true);
    }

    get refAddress(): number {
        if(this.refAddress === 0) {
            return 0;
        }
        return this.refAddress + 8;
    }

    free(): void {
        this.memory.free(this.blockAddress, this.size);
        super.free();
    }
}