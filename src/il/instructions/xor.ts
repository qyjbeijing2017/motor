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

export class MotorXorU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.U8] = MotorXorU8;

export class MotorXorU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.U16] = MotorXorU16;

export class MotorXorU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.U32] = MotorXorU32;

export class MotorXorU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.U64] = MotorXorU64;

export class MotorXorI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.I8] = MotorXorI8;

export class MotorXorI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.I16] = MotorXorI16;

export class MotorXorI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.I32] = MotorXorI32;

export class MotorXorI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.I64] = MotorXorI64;

export class MotorXorF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.F8;
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
        runtime.pushStack(MotorF8, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.F8] = MotorXorF8;

export class MotorXorF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.F16;
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
        runtime.pushStack(MotorF16, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.F16] = MotorXorF16;

export class MotorXorF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.F32;
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
        runtime.pushStack(MotorF32, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.F32] = MotorXorF32;

export class MotorXorF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.xor | MotorILType.F64;
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
        runtime.pushStack(MotorF64, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.xor | MotorILType.F64] = MotorXorF64;
