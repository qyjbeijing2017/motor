import { Memory } from "../memory";
import { Type } from "./type";

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
}