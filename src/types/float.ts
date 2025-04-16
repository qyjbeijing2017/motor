import { Instance } from "../instance";
import { getFloat8, setFloat8 } from "../utils/float8";

export class F8 extends Instance<number> {
    onGetSize(): number {
        return 1;
    }

    onGetJs(): number {
        return getFloat8(this.memory.viewer, this.address);
    }

    onSetJs(value: number): void {
        setFloat8(this.memory.viewer, this.address, value);
    }
}

export class F16 extends Instance<number> {
    onGetSize(): number {
        return 2;
    }

    onGetJs(): number {
        return this.memory.viewer.getFloat16(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setFloat16(this.address, value, true);
    }
}

export class F32 extends Instance<number> {
    onGetSize(): number {
        return 4;
    }

    onGetJs(): number {
        return this.memory.viewer.getFloat32(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setFloat32(this.address, value, true);
    }
}

export class F64 extends Instance<number> {
    onGetSize(): number {
        return 8;
    }

    onGetJs(): number {
        return this.memory.viewer.getFloat64(this.address, true);
    }

    onSetJs(value: number): void {
        this.memory.viewer.setFloat64(this.address, value, true);
    }
}
