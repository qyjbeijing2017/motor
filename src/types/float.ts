import { Memory } from "../memory";
import { getFloat8, setFloat8 } from "../utils/float8";
import { Type } from "./type";

export class F8 extends Type {
    get size() {
        return 8;
    }
    read(memory: Memory, address: number) {
        return getFloat8(memory.viewer, address);
    }
    write(memory: Memory, address: number, value: number) {
        setFloat8(memory.viewer, address, value);
    }
}

export class F16 extends Type {
    get size() {
        return 16;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getFloat16(address, true);
    }
    write(memory: Memory, address: number, value: number) {
        memory.viewer.setFloat16(address, value, true);
    }
}

export class F32 extends Type {
    get size() {
        return 32;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getFloat32(address, true);
    }
    write(memory: Memory, address: number, value: any): void {
        memory.viewer.setFloat32(address, value, true);
    }
}

export class F64 extends Type {
    get size() {
        return 64;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getFloat64(address, true);
    }
    write(memory: Memory, address: number, value: any): void {
        memory.viewer.setFloat64(address, value, true);
    }
}