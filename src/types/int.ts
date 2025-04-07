import { Memory } from "../memory";
import { Type } from "./type";

export class I8 extends Type<number> {
    get size(): number {
        return 1;
    }

    read(memory: Memory, address: number): number {
        return memory.viewer.getInt8(address);
    }

    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setInt8(address, value);
    }
}

export class I16 extends Type<number> {
    get size(): number {
        return 2;
    }

    read(memory: Memory, address: number): number {
        return memory.viewer.getInt16(address, true);
    }

    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setInt16(address, value, true);
    }
}

export class I32 extends Type<number> {
    get size(): number {
        return 4;
    }

    read(memory: Memory, address: number): number {
        return memory.viewer.getInt32(address, true);
    }

    write(memory: Memory, address: number, value: number): void {
        memory.viewer.setInt32(address, value, true);
    }
}

export class I64 extends Type<bigint> {
    get size(): number {
        return 8;
    }

    read(memory: Memory, address: number): bigint {
        return memory.viewer.getBigInt64(address, true);
    }

    write(memory: Memory, address: number, value: bigint): void {
        memory.viewer.setBigInt64(address, value, true);
    }
}
