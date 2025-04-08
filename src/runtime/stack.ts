import { TypeTag } from "../il/type-tag";
import { Memory } from "../memory";
import { Type } from "../types/type";
import { setFloat8 } from "../utils/float8";

export class Stack extends Type<undefined> {
    read(memory: Memory, address: number): undefined {
        throw new Error("Method not implemented.");
    }
    write(memory: Memory, address: number, value: undefined): void {
        throw new Error("Method not implemented.");
    }
    constructor(public size: number = 4 * 1024 * 1024) {
        super();
    }

    push(type: TypeTag, value: number | bigint, rsp: number, memory: Memory, address: number): number {
        switch (type) {
            case TypeTag.I8:
                rsp -= 1;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setInt8(address + rsp, value as number);
                break;
            case TypeTag.I16:
                rsp -= 2;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setInt16(address + rsp, value as number, true);
                break;
            case TypeTag.I32:
                rsp -= 4;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setInt32(address + rsp, value as number, true);
                break;
            case TypeTag.I64:
                rsp -= 8;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setBigInt64(address + rsp, value as bigint, true);
                break;
            case TypeTag.U8:
                rsp -= 1;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setUint8(address + rsp, value as number);
                break;
            case TypeTag.U16:
                rsp -= 2;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setUint16(address + rsp, value as number, true);
                break;
            case TypeTag.U32:
                rsp -= 4;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setUint32(address + rsp, value as number, true);
                break;
            case TypeTag.U64:
                rsp -= 8;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setBigUint64(address + rsp, value as bigint, true);
                break;
            case TypeTag.F8:
                rsp -= 4;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                setFloat8(memory.viewer, address + rsp, value as number);
                break;
            case TypeTag.F16:
                rsp -= 2;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setFloat16(address + rsp, value as number, true);
                break;
            case TypeTag.F32:
                rsp -= 4;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setFloat32(address + rsp, value as number, true);
                break;
            case TypeTag.F64:
                rsp -= 8;
                if (rsp < 0) {
                    throw new Error("Stack overflow");
                }
                memory.viewer.setFloat64(address + rsp, value as number, true);
                break;
        }
        return rsp;
    }

    pop(type: TypeTag, rsp: number): number {
        switch (type) {
            case TypeTag.I8:
                rsp += 1;
                break;
            case TypeTag.I16:
                rsp += 2;
                break;
            case TypeTag.I32:
                rsp += 4;
                break;
            case TypeTag.I64:
                rsp += 8;
                break;
            case TypeTag.U8:
                rsp += 1;
                break;
            case TypeTag.U16:
                rsp += 2;
                break;
            case TypeTag.U32:
                rsp += 4;
                break;
            case TypeTag.U64:
                rsp += 8;
                break;
            case TypeTag.F8:
                rsp += 4;
                break;
            case TypeTag.F16:
                rsp += 2;
                break;
            case TypeTag.F32:
                rsp += 4;
                break;
            case TypeTag.F64:
                rsp += 8;
                break;
        }
        if (rsp > this.size) {
            throw new Error("Cannot pop from empty stack");
        }
        return rsp;
    }
}