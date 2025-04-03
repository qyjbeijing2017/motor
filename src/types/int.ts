import { Memory } from "../memory";
import { Type } from "./type";

export class I8 extends Type {
    get size() {
        return 8;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getInt8(address);
    }
    write(memory: Memory, address: number, value: number) {
        memory.viewer.setInt8(address, value);
    }
}

export class I16 extends Type {
    get size() {
        return 16;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getInt16(address, true);
    }
    write(memory: Memory, address: number, value: number) {
        memory.viewer.setInt16(address, value, true);
    }
}

export class I32 extends Type {
    get size() {
        return 32;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getInt32(address, true);
    }
    write(memory: Memory, address: number, value: number) {
        memory.viewer.setInt32(address, value, true);
    }
}

export class I64 extends Type {
    get size() {
        return 64;
    }
    read(memory: Memory, address: number) {
        return memory.viewer.getBigInt64(address, true);
    }
    write(memory: Memory, address: number, value: bigint) {
        memory.viewer.setBigInt64(address, value, true);
    }
}