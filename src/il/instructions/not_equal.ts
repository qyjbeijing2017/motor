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

export class MotorNotEqualU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U8] = MotorNotEqualU8;

export class MotorNotEqualU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U16] = MotorNotEqualU16;

export class MotorNotEqualU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U32] = MotorNotEqualU32;

export class MotorNotEqualU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U64] = MotorNotEqualU64;

export class MotorNotEqualI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I8] = MotorNotEqualI8;

export class MotorNotEqualI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I16] = MotorNotEqualI16;

export class MotorNotEqualI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I32] = MotorNotEqualI32;

export class MotorNotEqualI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I64] = MotorNotEqualI64;

export class MotorNotEqualF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F8] = MotorNotEqualF8;

export class MotorNotEqualF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F16] = MotorNotEqualF16;

export class MotorNotEqualF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F32] = MotorNotEqualF32;

export class MotorNotEqualF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F64] = MotorNotEqualF64;
