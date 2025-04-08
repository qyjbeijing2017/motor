import { Memory } from "../../memory";
import { Operation } from "../operation";
import { OperatorCode } from "../operator-code";
import { TypeTag } from "../type-tag";
import type { Runtime } from "../../runtime/runtime";
import { Instance } from "../../instance";
import { U32 } from "../../types/uint";
import { Stack } from "../../runtime/stack";
import { singleton } from "../../utils/singleton";

export class Push extends Operation {
    execute(runtime: Instance<Runtime>): void {
        const stack = runtime.get('stack') as Instance<Stack>;
        const rsp = runtime.get('rsp') as Instance<U32>;
        rsp.value = singleton(Stack).push(this.type, this.value, rsp.value, stack.memory, stack.address);
    }
    constructor(
        type: TypeTag = TypeTag.I32,
        public value: number | bigint = 0,
    ) {
        super(
            type | OperatorCode.PUSH,
        );
    }
    get size(): number {
        switch (this.type) {
            case TypeTag.I8:
            case TypeTag.U8:
                return 3;
            case TypeTag.I16:
            case TypeTag.U16:
                return 4;
            case TypeTag.I32:
            case TypeTag.U32:
            case TypeTag.F8:
            case TypeTag.F16:
                return 6;
            case TypeTag.I64:
            case TypeTag.U64:
            case TypeTag.F32:
            case TypeTag.F64:
                return 10;
            default:
                throw new Error(`Unsupported type: ${this.type}`);
        }
    }
    parse(memory: Memory, address: number): number {
        this._code = memory.viewer.getUint16(address);
        switch (this.type) {
            case TypeTag.I8:
                this.value = memory.viewer.getInt8(address + 2);
                return address + 3;
            case TypeTag.I16:
                this.value = memory.viewer.getInt16(address + 2);
                return address + 4;
            case TypeTag.I32:
                this.value = memory.viewer.getInt32(address + 2);
                return address + 6;
            case TypeTag.I64:
                this.value = memory.viewer.getBigInt64(address + 2);
                return address + 10;
            case TypeTag.U8:
                this.value = memory.viewer.getUint8(address + 2);
                return address + 3;
            case TypeTag.U16:
                this.value = memory.viewer.getUint16(address + 2);
                return address + 4;
            case TypeTag.U32:
                this.value = memory.viewer.getUint32(address + 2);
                return address + 6;
            case TypeTag.U64:
                this.value = memory.viewer.getBigUint64(address + 2);
                return address + 10;
            case TypeTag.F8:
                this.value = memory.viewer.getFloat32(address + 2);
                return address + 6;
            case TypeTag.F16:
                this.value = memory.viewer.getFloat16(address + 2);
                return address + 4;
            case TypeTag.F32:
                this.value = memory.viewer.getFloat32(address + 2);
                return address + 6;
            case TypeTag.F64:
                this.value = memory.viewer.getFloat64(address + 2);
                return address + 10;                
            default:
                throw new Error(`Unsupported type: ${this.type}`);
        }
    }
    write(memory: Memory, address: number): number {
        this._code = memory.viewer.getUint16(address);
        switch (this.type) {
            case TypeTag.I8:
                memory.viewer.setInt8(address + 2, this.value as number);
                return address + 3;
            case TypeTag.I16:
                memory.viewer.setInt16(address + 2, this.value as number);
                return address + 4;
            case TypeTag.I32:
                memory.viewer.setInt32(address + 2, this.value as number);
                return address + 6;
            case TypeTag.I64:
                memory.viewer.setBigInt64(address + 2, this.value as bigint);
                return address + 10;
            case TypeTag.U8:
                memory.viewer.setUint8(address + 2, this.value as number);
                return address + 3;
            case TypeTag.U16:
                memory.viewer.setUint16(address + 2, this.value as number);
                return address + 4;
            case TypeTag.U32:
                memory.viewer.setUint32(address + 2, this.value as number);
                return address + 6;
            case TypeTag.U64:
                memory.viewer.setBigUint64(address + 2, this.value as bigint);
                return address + 10;
            case TypeTag.F8:
                memory.viewer.setFloat32(address + 2, this.value as number);
                return address + 6;
            case TypeTag.F16:
                memory.viewer.setFloat16(address + 2, this.value as number);
                return address + 4;
            case TypeTag.F32:
                memory.viewer.setFloat32(address + 2, this.value as number);
                return address + 6;
            case TypeTag.F64:
                memory.viewer.setFloat64(address + 2, this.value as number);
                return address + 10;                
            default:
                throw new Error(`Unsupported type: ${this.type}`);
        }
    }
}