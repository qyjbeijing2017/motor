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

export class MotorSubU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.U8] = MotorSubU8;

export class MotorSubU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.U16] = MotorSubU16;

export class MotorSubU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.U32] = MotorSubU32;

export class MotorSubU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.U64] = MotorSubU64;

export class MotorSubI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.I8] = MotorSubI8;

export class MotorSubI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.I16] = MotorSubI16;

export class MotorSubI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.I32] = MotorSubI32;

export class MotorSubI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.I64] = MotorSubI64;

export class MotorSubF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.F8] = MotorSubF8;

export class MotorSubF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.F16] = MotorSubF16;

export class MotorSubF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.F32] = MotorSubF32;

export class MotorSubF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.sub | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a - b);
    }
}
MotorInstruction.instructions[MotorOperator.sub | MotorILType.F64] = MotorSubF64;
