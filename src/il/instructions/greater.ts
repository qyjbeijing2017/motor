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


export class MotorGreaterU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.U8] = MotorGreaterU8;

export class MotorGreaterU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.U16] = MotorGreaterU16;

export class MotorGreaterU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.U32] = MotorGreaterU32;

export class MotorGreaterU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.U64] = MotorGreaterU64;

export class MotorGreaterI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.I8] = MotorGreaterI8;

export class MotorGreaterI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.I16] = MotorGreaterI16;

export class MotorGreaterI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.I32] = MotorGreaterI32;

export class MotorGreaterI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.I64] = MotorGreaterI64;

export class MotorGreaterF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.F8] = MotorGreaterF8;

export class MotorGreaterF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.F16] = MotorGreaterF16;

export class MotorGreaterF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.F32] = MotorGreaterF32;

export class MotorGreaterF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.greater | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a > b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.greater | MotorILType.F64] = MotorGreaterF64;
