import { Memory } from "../memory";
import { Type } from "./type";

export class Bool extends Type<boolean> {
    get size(): number {
        return 1;
    }

    read(memory: Memory, address: number): boolean {
        return Boolean(memory.viewer.getUint8(address));
    }

    write(memory: Memory, address: number, value: boolean): void {
        memory.viewer.setUint8(address, Number(value));
    }
}