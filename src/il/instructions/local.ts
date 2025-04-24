import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { motorGetFloat8, motorSetFloat8 } from "../../utils/float8";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorLocalU8 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.U8;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint8(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorU8(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorU8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.U8] = MotorLocalU8;

export class MotorLocalU16 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.U16;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint16(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint16(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorU16(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorU16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.U16] = MotorLocalU16;

export class MotorLocalU32 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.U32;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint32(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint32(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorU32(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorU32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.U32] = MotorLocalU32;

export class MotorLocalU64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.U64;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorU64(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorU64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.U64] = MotorLocalU64;

export class MotorLocalI8 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.I8;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt8(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt8(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorI8(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorI8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.I8] = MotorLocalI8;

export class MotorLocalI16 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.I16;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt16(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt16(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorI16(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorI16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.I16] = MotorLocalI16;

export class MotorLocalI32 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.I32;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt32(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt32(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorI32(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorI32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.I32] = MotorLocalI32;

export class MotorLocalI64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.I64;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorI64(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorI64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.I64] = MotorLocalI64;

export class MotorLocalF8 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.F8;
    protected setImmediate(value: number = 0): void {
        motorSetFloat8(this.memory.viewer, this.address + 2, value);
    }
    get js(): number {
        return motorGetFloat8(this.memory.viewer, this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorF8(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorF8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.F8] = MotorLocalF8;

export class MotorLocalF16 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.F16;
    protected setImmediate(value: number = 0): void {
        setFloat16(this.memory.viewer, this.address + 2, value);
    }
    get js(): number {
        return getFloat16(this.memory.viewer, this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorF16(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorF16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.F16] = MotorLocalF16;

export class MotorLocalF32 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.F32;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setFloat32(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getFloat32(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorF32(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorF32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.F32] = MotorLocalF32;

export class MotorLocalF64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.local | MotorILType.F64;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setFloat64(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getFloat64(this.address + 2);
    }
    exec(runtime: MotorRuntime): void {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new MotorF64(undefined, stack.memory, stack.address + framePointer.js + this.js);
        runtime.pushStack(MotorF64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.local | MotorILType.F64] = MotorLocalF64;
