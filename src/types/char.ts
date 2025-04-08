import { Memory } from "../memory";
import { Type } from "./type";

export class Char extends Type<string> {
    get size(): number {
        return 1;
    }
    read(memory: Memory, address: number): string {
        return String.fromCharCode(memory.viewer.getUint8(address));
    }
    write(memory: Memory, address: number, value: string): void {
        memory.viewer.setUint8(address, value.charCodeAt(0));
    }
}