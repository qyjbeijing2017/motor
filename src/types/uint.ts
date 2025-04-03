import { Type } from "./type";

export class U8 extends Type {
    get size() {
        return 8;
    }
    read(memory: any, address: number) {
        return memory.viewer.getUint8(address);
    }
    write(memory: any, address: number, value: number) {
        memory.viewer.setUint8(address, value);
    }
}

export class U16 extends Type {
    get size() {
        return 16;
    }
    read(memory: any, address: number) {
        return memory.viewer.getUint16(address, true);
    }
    write(memory: any, address: number, value: number) {
        memory.viewer.setUint16(address, value, true);
    }
}

export class U32 extends Type {
    get size() {
        return 32;
    }
    read(memory: any, address: number) {
        return memory.viewer.getUint32(address, true);
    }
    write(memory: any, address: number, value: number) {
        memory.viewer.setUint32(address, value, true);
    }
}

export class U64 extends Type {
    get size() {
        return 64;
    }
    read(memory: any, address: number) {
        return memory.viewer.getBigUint64(address, true);
    }
    write(memory: any, address: number, value: bigint) {
        memory.viewer.setBigUint64(address, value, true);
    }
}