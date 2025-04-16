import { Instance } from "../instance";

export class U8 extends Instance<number> {
    onGetSize(): number {
        return 1;
    }

    onGetJs(): number {
        return this.memory.viewer.getUint8(this.address);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setUint8(this.address, value);
    }
}

export class U16 extends Instance<number> {
    onGetSize(): number {
        return 2;
    }

    onGetJs(): number {
        return this.memory.viewer.getUint16(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setUint16(this.address, value, true);
    }
}

export class U32 extends Instance<number> {
    onGetSize(): number {
        return 4;
    }

    onGetJs(): number {
        return this.memory.viewer.getUint32(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setUint32(this.address, value, true);
    }
}

export class U64 extends Instance<bigint> {
    onGetSize(): number {
        return 8;
    }

    onGetJs(): bigint {
        return this.memory.viewer.getBigUint64(this.address, true);
    }

    onSetJs(value: bigint): void {
        this.memory.viewer.setBigUint64(this.address, value, true);
    }
}
