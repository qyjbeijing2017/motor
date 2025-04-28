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

export class MotorAndU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.U8] = MotorAndU8;

export class MotorAndU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.U16] = MotorAndU16;

export class MotorAndU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.U32] = MotorAndU32;

export class MotorAndU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.U64] = MotorAndU64;

export class MotorAndI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.I8] = MotorAndI8;

export class MotorAndI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.I16] = MotorAndI16;

export class MotorAndI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.I32] = MotorAndI32;

export class MotorAndI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.I64] = MotorAndI64;

export class MotorAndF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF8);
        const b = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.F8] = MotorAndF8;

export class MotorAndF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF16);
        const b = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.F16] = MotorAndF16;

export class MotorAndF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF32);
        const b = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.F32] = MotorAndF32;

export class MotorAndF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.and | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF64);
        const b = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a && b);
    }
}
MotorInstruction.instructions[MotorOperator.and | MotorILType.F64] = MotorAndF64;
