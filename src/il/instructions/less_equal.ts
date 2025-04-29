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


export class MotorLessEqualU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.U8] = MotorLessEqualU8;

export class MotorLessEqualU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.U16] = MotorLessEqualU16;

export class MotorLessEqualU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.U32] = MotorLessEqualU32;

export class MotorLessEqualU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.U64] = MotorLessEqualU64;

export class MotorLessEqualI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.I8] = MotorLessEqualI8;

export class MotorLessEqualI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.I16] = MotorLessEqualI16;

export class MotorLessEqualI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.I32] = MotorLessEqualI32;

export class MotorLessEqualI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.I64] = MotorLessEqualI64;

export class MotorLessEqualF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.F8;
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
        runtime.pushStack(MotorF8, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.F8] = MotorLessEqualF8;

export class MotorLessEqualF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.F16;
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
        runtime.pushStack(MotorF16, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.F16] = MotorLessEqualF16;

export class MotorLessEqualF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.F32;
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
        runtime.pushStack(MotorF32, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.F32] = MotorLessEqualF32;

export class MotorLessEqualF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less_equal | MotorILType.F64;
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
        runtime.pushStack(MotorF64, a <= b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less_equal | MotorILType.F64] = MotorLessEqualF64;
