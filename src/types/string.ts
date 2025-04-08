import { Memory } from "../memory";
import { singleton } from "../utils/singleton";
import { MotorArray } from "./array";
import { Char } from "./char";
import { Type } from "./type";
import { U32 } from "./uint";

interface StringMembers {
    length: U32;
    charArray: MotorArray<Char>;
}

export class MotorString extends Type<string> {
    get size(): number {
        return 8;
    }
    read(memory: Memory, address: number): string {
        const length = memory.viewer.getUint32(address, true);
        const arrAddr = memory.viewer.getUint32(address + 4, true);
        return String.fromCharCode(...memory.buffer.subarray(arrAddr, arrAddr + length));
    }
    write(memory: Memory, address: number, value: string): void {
        const lengthBefore = memory.viewer.getUint32(address, true);
        if (lengthBefore > 0) {
            const arrAddrBefore = memory.viewer.getUint32(address + 4, true);
            memory.free(arrAddrBefore, lengthBefore);
        }
        const length = value.length;
        const arrAddr = memory.allocate(length);
        for (let i = 0; i < length; i++) {
            memory.buffer[arrAddr + i] = value.charCodeAt(i);
        }
        memory.viewer.setUint32(address, length, true);
        memory.viewer.setUint32(address + 4, arrAddr, true);
    }
    free(memory: Memory, address: number): void {
        const length = memory.viewer.getUint32(address, true);
        if (length > 0) {
            const arrAddr = memory.viewer.getUint32(address + 4, true);
            memory.free(arrAddr, length);
        }
        super.free(memory, address);
    }
    getType<Key extends keyof StringMembers>(key: Key, memory: Memory, address: number): StringMembers[Key] {
        if (key === 'length') {
            return singleton(U32) as any;
        } else if (key === 'charArray') {
            return new MotorArray(singleton(Char), memory.viewer.getUint32(address, true)) as any;
        }
        throw new Error(`Key ${key} not found`);
    }
    getAddress(key: string, memory: Memory, address: number): number {
        if (key === 'length') {
            return address;
        } else if (key === 'charArray') {
            return memory.viewer.getUint32(address + 4, true);
        }
        throw new Error(`Key ${key} not found`);
    }
}