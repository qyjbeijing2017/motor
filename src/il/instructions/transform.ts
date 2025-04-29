import { MotorRuntime } from "../../runtime";
import { MotorF16 } from "../../types/number/f16";
import { MotorF32 } from "../../types/number/f32";
import { MotorF64 } from "../../types/number/f64";
import { MotorF8 } from "../../types/number/f8";
import { MotorI16 } from "../../types/number/i16";
import { MotorI32 } from "../../types/number/i32";
import { MotorI64 } from "../../types/number/i64";
import { MotorI8 } from "../../types/number/i8";
import { MotorU16 } from "../../types/number/u16";
import { MotorU32 } from "../../types/number/u32";
import { MotorU64 } from "../../types/number/u64";
import { MotorU8 } from "../../types/number/u8";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

function transformTo(runtime: MotorRuntime, from: number, to: MotorILType) {
    switch (to) {
        case MotorILType.U8:
            runtime.pushStack(MotorU8, from);
            break;
        case MotorILType.U16:
            runtime.pushStack(MotorU16, from);
            break;
        case MotorILType.U32:
            runtime.pushStack(MotorU32, from);
            break;
        case MotorILType.U64:
            runtime.pushStack(MotorU64, from);
            break;
        case MotorILType.I8:
            runtime.pushStack(MotorI8, from);
            break;
        case MotorILType.I16:
            runtime.pushStack(MotorI16, from);
            break;
        case MotorILType.I32:
            runtime.pushStack(MotorI32, from);
            break;
        case MotorILType.I64:
            runtime.pushStack(MotorI64, from);
            break;
        case MotorILType.F8:
            runtime.pushStack(MotorF8, from);
            break;
        case MotorILType.F16:
            runtime.pushStack(MotorF16, from);
            break;
        case MotorILType.F32:
            runtime.pushStack(MotorF32, from);
            break;
        case MotorILType.F64:
            runtime.pushStack(MotorF64, from);
            break;
        default:
            throw new Error(`Invalid transform type: ${to}`);
    }
}

export class MotorTransformU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.U8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorU8);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.U8] = MotorTransformU8;

export class MotorTransformU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.U16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorU16);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.U16] = MotorTransformU16;

export class MotorTransformU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.U32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorU32);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.U32] = MotorTransformU32;

export class MotorTransformU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.U64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorU64);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.U64] = MotorTransformU64;

export class MotorTransformI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.I8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorI8);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.I8] = MotorTransformI8;

export class MotorTransformI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.I16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorI16);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.I16] = MotorTransformI16;

export class MotorTransformI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.I32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorI32);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.I32] = MotorTransformI32;

export class MotorTransformI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.I64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorI64);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.I64] = MotorTransformI64;

export class MotorTransformF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.F8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorF8);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.F8] = MotorTransformF8;

export class MotorTransformF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.F16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorF16);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.F16] = MotorTransformF16;

export class MotorTransformF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.F32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorF32);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.F32] = MotorTransformF32;

export class MotorTransformF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.transform | MotorILType.F64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: MotorRuntime): Promise<void> {
        const from = runtime.popStack(MotorF64);
        transformTo(runtime, from, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.transform | MotorILType.F64] = MotorTransformF64;
