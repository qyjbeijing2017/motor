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

export class MotorOrU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U8] = MotorOrU8;

export class MotorOrU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U16] = MotorOrU16;

export class MotorOrU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U32] = MotorOrU32;

export class MotorOrU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U64] = MotorOrU64;

export class MotorOrI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I8] = MotorOrI8;

export class MotorOrI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I16] = MotorOrI16;

export class MotorOrI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I32] = MotorOrI32;

export class MotorOrI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I64] = MotorOrI64;

export class MotorOrF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF8);
        const b = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F8] = MotorOrF8;

export class MotorOrF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF16);
        const b = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F16] = MotorOrF16;

export class MotorOrF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF32);
        const b = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F32] = MotorOrF32;

export class MotorOrF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF64);
        const b = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F64] = MotorOrF64;
