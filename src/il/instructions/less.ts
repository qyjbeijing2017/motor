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


export class MotorLessU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U8] = MotorLessU8;

export class MotorLessU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U16] = MotorLessU16;

export class MotorLessU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U32] = MotorLessU32;

export class MotorLessU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U64] = MotorLessU64;

export class MotorLessI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I8] = MotorLessI8;

export class MotorLessI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I16] = MotorLessI16;

export class MotorLessI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I32] = MotorLessI32;

export class MotorLessI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I64] = MotorLessI64;

export class MotorLessF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F8;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F8] = MotorLessF8;

export class MotorLessF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F16;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F16] = MotorLessF16;

export class MotorLessF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F32;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F32] = MotorLessF32;

export class MotorLessF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F64;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F64] = MotorLessF64;
