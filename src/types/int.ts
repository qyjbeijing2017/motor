import { Instance } from "../instance";

export class I8 extends Instance<number> {
    onGetSize(): number {
        return 1;
    }

    onGetJs(): number {
        return this.memory.viewer.getInt8(this.address);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setInt8(this.address, value);
    }
}

export class I16 extends Instance<number> {
    onGetSize(): number {
        return 2;
    }

    onGetJs(): number {
        return this.memory.viewer.getInt16(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setInt16(this.address, value, true);
    }
}

export class I32 extends Instance<number> {
    onGetSize(): number {
        return 4;
    }

    onGetJs(): number {
        return this.memory.viewer.getInt32(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setInt32(this.address, value, true);
    }
}

export class I64 extends Instance<bigint> {
    onGetSize(): number {
        return 8;
    }

    onGetJs(): bigint {
        return this.memory.viewer.getBigInt64(this.address, true);
    }

    onSetJs(value: bigint): void {
        this.memory.viewer.setBigInt64(this.address, value, true);
    }
}