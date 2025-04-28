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

export class MotorStoreU8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorU8);
        new MotorU8(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.U8] = MotorStoreU8;

export class MotorStoreU16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorU16);
        new MotorU16(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.U16] = MotorStoreU16;

export class MotorStoreU32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorU32);
        new MotorU32(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.U32] = MotorStoreU32;

export class MotorStoreU64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorU64);
        new MotorU64(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.U64] = MotorStoreU64;

export class MotorStoreI8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorI8);
        new MotorI8(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.I8] = MotorStoreI8;

export class MotorStoreI16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorI16);
        new MotorI16(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.I16] = MotorStoreI16;

export class MotorStoreI32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorI32);
        new MotorI32(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.I32] = MotorStoreI32;

export class MotorStoreI64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorI64);
        new MotorI64(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.I64] = MotorStoreI64;

export class MotorStoreF8 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorF8);
        new MotorF8(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.F8] = MotorStoreF8;

export class MotorStoreF16 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorF16);
        new MotorF16(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.F16] = MotorStoreF16;

export class MotorStoreF32 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorF32);
        new MotorF32(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.F32] = MotorStoreF32;

export class MotorStoreF64 extends MotorInstruction {
    static readonly size = 2;
    get code(): number {
        return MotorOperator.store | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    exec(runtime: MotorRuntime): void {
        const target = runtime.popStack(MotorU64);
        const value = runtime.popStack(MotorF64);
        new MotorF64(value, runtime.memory, target)
    }
}
MotorInstruction.instructions[MotorOperator.store | MotorILType.F64] = MotorStoreF64;
