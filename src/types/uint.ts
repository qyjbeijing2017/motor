import { Memory } from "../memory";
import { Type } from "./type";

export class U8 extends Type<number> {
    get size(): number {
        return 1;
    }
    read(memory: Memory, address: number): number {
        return memory.viewer.getUint8(address);
    }
    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setUint8(address, value);
    }
}

export class U16 extends Type<number> {
    get size(): number {
        return 2;
    }
    read(memory: Memory, address: number): number {
        return memory.viewer.getUint16(address, true);
    }
    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setUint16(address, value, true);
    }
}

export class U32 extends Type<number> {
    get size(): number {
        return 4;
    }
    read(memory: Memory, address: number): number {
        return memory.viewer.getUint32(address, true);
    }
    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setUint32(address, value, true);
    }
}

export class U64 extends Type<bigint> {
    get size(): number {
        return 8;
    }
    read(memory: Memory, address: number): bigint {
        return memory.viewer.getBigUint64(address, true);
    }
    write(memory: Memory, address: number, value: bigint): void {
        memory.viewer.setBigUint64(address, value, true);
    }
}
