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

export class MotorMulU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.U8] = MotorMulU8;

export class MotorMulU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.U16] = MotorMulU16;

export class MotorMulU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.U32] = MotorMulU32;

export class MotorMulU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.U64] = MotorMulU64;

export class MotorMulI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.I8] = MotorMulI8;

export class MotorMulI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.I16] = MotorMulI16;

export class MotorMulI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.I32] = MotorMulI32;

export class MotorMulI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.I64] = MotorMulI64;

export class MotorMulF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.F8;
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
        runtime.pushStack(MotorF8, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.F8] = MotorMulF8;

export class MotorMulF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.F16;
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
        runtime.pushStack(MotorF16, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.F16] = MotorMulF16;

export class MotorMulF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.F32;
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
        runtime.pushStack(MotorF32, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.F32] = MotorMulF32;

export class MotorMulF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mul | MotorILType.F64;
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
        runtime.pushStack(MotorF64, a * b);
    }
}
MotorInstruction.instructions[MotorOperator.mul | MotorILType.F64] = MotorMulF64;
