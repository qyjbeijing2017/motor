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

export class MotorEqualU8 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U8] = MotorEqualU8;

export class MotorEqualU16 extends MotorInstruction {
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
        runtime.pushStack(MotorU16, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U16] = MotorEqualU16;

export class MotorEqualU32 extends MotorInstruction {
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
        runtime.pushStack(MotorU32, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U32] = MotorEqualU32;

export class MotorEqualU64 extends MotorInstruction {
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
        runtime.pushStack(MotorU64, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U64] = MotorEqualU64;

export class MotorEqualI8 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I8] = MotorEqualI8;

export class MotorEqualI16 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I16] = MotorEqualI16;

export class MotorEqualI32 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I32] = MotorEqualI32;

export class MotorEqualI64 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I64] = MotorEqualI64;

export class MotorEqualF8 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F8] = MotorEqualF8;

export class MotorEqualF16 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F16] = MotorEqualF16;

export class MotorEqualF32 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F32] = MotorEqualF32;

export class MotorEqualF64 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F64] = MotorEqualF64;
