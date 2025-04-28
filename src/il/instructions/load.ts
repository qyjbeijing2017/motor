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

export class MotorLoadU8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorU8(undefined, runtime.memory, from);
        runtime.pushStack(MotorU8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.U8] = MotorLoadU8;

export class MotorLoadU16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorU16(undefined, runtime.memory, from);
        runtime.pushStack(MotorU16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.U16] = MotorLoadU16;

export class MotorLoadU32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorU32(undefined, runtime.memory, from);
        runtime.pushStack(MotorU32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.U32] = MotorLoadU32;

export class MotorLoadU64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorU64(undefined, runtime.memory, from);
        runtime.pushStack(MotorU64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.U64] = MotorLoadU64;

export class MotorLoadI8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorI8(undefined, runtime.memory, from);
        runtime.pushStack(MotorI8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.I8] = MotorLoadI8;

export class MotorLoadI16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorI16(undefined, runtime.memory, from);
        runtime.pushStack(MotorI16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.I16] = MotorLoadI16;

export class MotorLoadI32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorI32(undefined, runtime.memory, from);
        runtime.pushStack(MotorI32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.I32] = MotorLoadI32;

export class MotorLoadI64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorI64(undefined, runtime.memory, from);
        runtime.pushStack(MotorI64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.I64] = MotorLoadI64;

export class MotorLoadF8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorF8(undefined, runtime.memory, from);
        runtime.pushStack(MotorF8, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.F8] = MotorLoadF8;

export class MotorLoadF16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorF16(undefined, runtime.memory, from);
        runtime.pushStack(MotorF16, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.F16] = MotorLoadF16;

export class MotorLoadF32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorF32(undefined, runtime.memory, from);
        runtime.pushStack(MotorF32, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.F32] = MotorLoadF32;

export class MotorLoadF64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.load | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const from = runtime.popStack(MotorU64);
        const value = new MotorF64(undefined, runtime.memory, from);
        runtime.pushStack(MotorF64, value.js);
    }
}
MotorInstruction.instructions[MotorOperator.load | MotorILType.F64] = MotorLoadF64;
