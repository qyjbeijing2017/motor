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

export class MotorPopU8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U8] = MotorPopU8;

export class MotorPopU16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U16] = MotorPopU16;

export class MotorPopU32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U32] = MotorPopU32;

export class MotorPopU64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U64] = MotorPopU64;

export class MotorPopI8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I8] = MotorPopI8;

export class MotorPopI16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I16] = MotorPopI16;

export class MotorPopI32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I32] = MotorPopI32;

export class MotorPopI64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I64] = MotorPopI64;

export class MotorPopF8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F8] = MotorPopF8;

export class MotorPopF16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F16] = MotorPopF16;

export class MotorPopF32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F32] = MotorPopF32;

export class MotorPopF64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.pop | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F64] = MotorPopF64;
