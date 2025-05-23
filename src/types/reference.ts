import { QzaInstance } from "../instance"

export abstract class QzaReference<T> extends QzaInstance<T> {
    get memoryAddress(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }

    protected set memoryAddress(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }

    get refAddress(): number {
        if(this.memoryAddress === 0) {
            return 0;
        }
        return this.memoryAddress + 8;
    }

    get size(): number {
        if(this.memoryAddress === 0) {
            return 0;
        }
        return Number(this.memory.viewer.getBigUint64(this.memoryAddress, true));
    }

    protected set size(value: number) {
        this.delete();
        this.memoryAddress = this.memory.allocate(value + 8);
        this.memory.viewer.setBigUint64(this.memoryAddress, BigInt(value), true);
    }

    delete(): void {
        if (this.memoryAddress === 0) {
            return;
        }
        this.memory.free(this.memoryAddress, this.size + 8);
        this.memoryAddress = 0;
    }
}
